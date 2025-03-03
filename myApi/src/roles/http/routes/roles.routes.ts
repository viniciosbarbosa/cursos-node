import { rolesRouter } from "@roles/http/routes/roles.routes";
import { RolesRepository } from "./../../repositories/RolesRepository";
import { Router } from "express";

const rolesRouter = Router();
const rolesRespository = new RolesRepository();

rolesRouter.post("/", (request, response) => {
  const { name } = request.body;

  const role = rolesRespository.create({ name });

  return response.status(201).json(role);
});

export { rolesRouter };
