import { container } from "tsyringe";
import { ShowRoleUseCase } from "./ShowRoleUseCase";
import { Request, Response } from "express";

export class ShowRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const showRoleUseCase = container.resolve(ShowRoleUseCase);

    const { id } = request.params;

    const role = await showRoleUseCase.execute({ id });

    return response.status(200).json(role);
  }
}
