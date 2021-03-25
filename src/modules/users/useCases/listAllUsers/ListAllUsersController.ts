import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const users = this.listAllUsersUseCase.execute({
        user_id,
      });

      return response.json(users);
    } catch (e) {
      return response.status(400).send({ error: e.message });
    }
  }
}

export { ListAllUsersController };
