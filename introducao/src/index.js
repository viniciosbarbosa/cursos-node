const express = require("express");
const app = express();
app.use(express.json());

const { v4: uuidv4 } = require("uuid");

const projects = [];

function logRoutes(request, response, next) {
  console.log(request);
  const { method, url } = request;
  const route = `[${method.toUpperCase()}] ${url}`;
  console.log(route);

  return next();
}

// app.use(logRoutes);

app.get("/projects", function (request, response) {
  return response.json(projects);
});

app.post("/projects", logRoutes, function (request, response) {
  const { name, owner } = request.body;

  const project = {
    id: uuidv4(),
    name,
    owner,
  };
  console.log(project);
  projects.push(project);

  return response.status(201).json(project);
});

app.put("/projects/:id", function (request, response) {
  const { id } = request.params;
  const { name, owner } = request.body;

  const projectIndex = projects.findIndex((item) => item.id === id);

  if (projectIndex < 0) {
    return response.status(404).json({ error: "Project not found" });
  }

  if (!name || !owner) {
    return response.status(400).json({ error: "name and owner are required" });
  }

  const project = {
    id,
    name,
    owner,
  };

  projects[projectIndex] = project;

  return response.status(200).json(project);
});

app.delete("/projects/:id", function (request, response) {
  const { id } = request.params;

  const projectIndex = projects.findIndex((item) => item.id === id);

  if (projectIndex < 0) {
    return response.status(404).json({ error: "Project not found" });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
