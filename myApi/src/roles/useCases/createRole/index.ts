import { CreateRoleController } from "@roles/useCases/createRole/CreateRoleController";
import { CreateRoleUseCase } from "./CreateRoleUseCase";
import { RolesRepository } from "./../../repositories/RolesRepository";

const rolesRepository = RolesRepository.getInstance();
const createRoleUseCase = new CreateRoleUseCase(rolesRepository);
export const createRolesController = new CreateRoleController(
  createRoleUseCase,
);
