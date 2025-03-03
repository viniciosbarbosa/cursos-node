import { rolesRouter } from "@roles/http/routes/roles.routes";
import { RolesRepository } from "./../../repositories/RolesRepository";
import { Router } from "express";

const rolesRouter = Router();
const rolesRespository = new RolesRepository();

rolesRouter.post("/", (request, response) => {
  const { name } = request.body;

  const roleAlreadyExists = rolesRespository.findByName(name.toUpperCase());

  if (roleAlreadyExists) {
    return response.status(400).json({ error: "Role already exists" });
  }
  const role = rolesRespository.create({ name });

  return response.status(201).json(role);
});

rolesRouter.get("/", (_request, response) => {
  const roles = rolesRespository.findAll();

  return response.status(200).json(roles);
});

export { rolesRouter };
