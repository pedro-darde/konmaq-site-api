import { ShowUserController } from "../../../controllers/User/ShowUserController";
import { DbUser } from "../../../data/usecase/DbUser";
import { Controller } from "../../../protocols/Controller";

export const makeShowUserFactory = (): Controller => {
  const dbUser = new DbUser();
  const userController = new ShowUserController(dbUser);
  return userController;
};
