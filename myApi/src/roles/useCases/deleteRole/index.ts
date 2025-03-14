import { RolesRepository } from "./../../repositories/RolesRepository";
import { DeleteRoleController } from "./DeleteRoleController";
import { DeleteRoleUseCase } from "./DeleteRoleUseCase";

const rolesRepository = RolesRepository.getInstance();
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository);
export const deleteRoleController = new DeleteRoleController(deleteRoleUseCase);
