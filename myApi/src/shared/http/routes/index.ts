import { AppError } from "@shared/errors/AppError";
import { Router } from "express";

const routes = Router();

routes.get("/", (error, request, response) => {
  throw new AppError("Acesso negado");
  return response.json({ message: "Olá, dev" });
});

export { routes };
