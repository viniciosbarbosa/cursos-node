import { ShowRoleUseCase } from "./ShowRoleUseCase";
import { ShowRoleController } from "./ShowRoleController";
import { RolesRepository } from "./../../repositories/RolesRepository";

const rolesRepository = RolesRepository.getInstance();
const showRoleUseCase = new ShowRoleUseCase(rolesRepository);
export const showRolesController = new ShowRoleController(showRoleUseCase);
