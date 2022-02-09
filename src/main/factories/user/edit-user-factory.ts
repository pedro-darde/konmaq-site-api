import { EditUserController } from "../../../controllers/User/EditUserController";
import { DbUser } from "../../../data/usecase/DbUser";
import { Controller } from "../../../protocols/Controller";

export const makeEditUserFactory = (): Controller => {
  const dbUser = new DbUser();
  const userController = new EditUserController(dbUser);
  return userController;
};
