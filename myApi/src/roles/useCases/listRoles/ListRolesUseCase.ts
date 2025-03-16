import {
  IRolesRepository,
  RolesPagineteProperties,
} from "@roles/repositories/IRolesRepository";
import { inject, injectable } from "tsyringe";

type ListRolesUseCaseParams = {
  page: number;
  limit: number;
};
@injectable()
export class ListRolesUseCase {
  constructor(
    @inject("RolesRepository")
    private rolesRepository: IRolesRepository,
  ) {}

  execute({
    page,
    limit,
  }: ListRolesUseCaseParams): Promise<RolesPagineteProperties> {
    const take = limit;
    const skip = Number((page - 1) * take);
    return this.rolesRepository.findAll({ page, skip, take });
  }
}
