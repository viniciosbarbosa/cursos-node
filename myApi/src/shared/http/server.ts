import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Olá, dev" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});
