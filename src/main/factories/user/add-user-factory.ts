import "../../../database/connection";
import { AddUserController } from "../../../controllers/User/AddUserController";
import { DbUser } from "../../../data/usecase/DbUser";
import { Controller } from "../../../protocols/Controller";
import { UserPostgresRepository } from "../../../repositories/UserPostgresRepository";
export const makeAddUserFactory = (): Controller => {
  const dbUser = new DbUser();
  const userController = new AddUserController(dbUser);
  return userController;
};
