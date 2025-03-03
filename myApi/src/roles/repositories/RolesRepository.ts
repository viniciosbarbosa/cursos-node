import { Role } from "@roles/entities/Role";

type CreateRoleDto = {
  name: string;
};

export class RolesRepository {
  private roles: Array<Role>;

  constructor() {
    this.roles = [];
  }

  create({ name }: CreateRoleDto): Role {
    const role = new Role();
    Object.assign(role, {
      name,
      create_at: new Date(),
    });

    this.roles.push(role);

    return role;
  }

  findAll(): Role[] {
    return this.roles;
  }
}
