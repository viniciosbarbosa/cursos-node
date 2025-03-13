import { deleteRoleController } from "@roles/useCases/deleteRole";
import { showRolesController } from "./../../useCases/showRole/index";
import { createRolesController } from "@roles/useCases/createRole";
import { listRolesController } from "@roles/useCases/listRoles";
import { updateRoleController } from "@roles/useCases/updateRole";

import { Router } from "express";

const rolesRouter = Router();

rolesRouter.post("/", (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get("/", (request, response) => {
  return listRolesController.handle(request, response);
});

rolesRouter.get("/:id", (request, response) => {
  return showRolesController.handle(request, response);
});

rolesRouter.put("/:id", (request, response) => {
  return updateRoleController.handle(request, response);
});

rolesRouter.delete("/:id", (request, response) => {
  return deleteRoleController.handle(request, response);
});

export { rolesRouter };
