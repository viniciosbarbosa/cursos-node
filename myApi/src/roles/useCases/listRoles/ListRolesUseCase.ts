import { Role } from "@roles/entities/Role";
import { RolesRepository } from "./../../repositories/RolesRepository";
export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll();
  }
}
