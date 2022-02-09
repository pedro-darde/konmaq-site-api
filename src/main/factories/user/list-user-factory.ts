import { ListUserController } from "../../../controllers/User/ListUserController";
import { DbUser } from "../../../data/usecase/DbUser";
import { Controller } from "../../../protocols/Controller";

export const makeListUserFactory = (): Controller => {
  const dbUser = new DbUser();
  const userController = new ListUserController(dbUser);
  return userController;
};
