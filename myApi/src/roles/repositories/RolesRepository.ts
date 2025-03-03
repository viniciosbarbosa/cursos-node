import { Role } from "@roles/entities/Role";

type CreateRoleDto = {
  name: string;
};

export class RolesRepository {
  private roles: Array<Role>;
  private static INSTANCE: RolesRepository;

  private constructor() {
    this.roles = [];
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository();
    }
    return RolesRepository.INSTANCE;
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

  findByName(name: string): Role | undefined {
    return this.roles.find((role) => role.name === name);
  }

  findAll(): Role[] {
    return this.roles;
  }
}
