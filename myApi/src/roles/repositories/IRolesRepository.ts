import { Role } from "@roles/entities/Role";

export type CreateRoleDto = {
  name: string;
};

export type PaginateParams = {
  page: number;
  skip: number;
  take: number;
};

export type RolesPagineteProperties = {
  per_page: number;
  total: number;
  current_page: number;
  data: Array<Role>;
};

export interface IRolesRepository {
  create({ name }: CreateRoleDto): Promise<Role>;
  save(role: Role): Promise<Role>;
  findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPagineteProperties>;
  findById(id: string): Promise<Role> | null;
  findByName(name: string): Promise<Role> | null;
  delete(role: Role): Promise<void>;
}
