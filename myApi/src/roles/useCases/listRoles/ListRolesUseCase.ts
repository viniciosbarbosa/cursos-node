import {
  RolesPagineteProperties,
  RolesRepository,
} from "./../../repositories/RolesRepository";

type ListRolesUseCaseParams = {
  page: number;
  limit: number;
};
export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({
    page,
    limit,
  }: ListRolesUseCaseParams): Promise<RolesPagineteProperties> {
    const take = limit;
    const skip = Number((page - 1) * take);
    return this.rolesRepository.findAll({ page, skip, take });
  }
}
