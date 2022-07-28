import "../../../database/connection";
import { AddUserController } from "../../../controllers/User/AddUserController";
import { DbUser } from "../../../data/usecase/DbUser";
import { Controller } from "../../../protocols/Controller";
import { DbUSerAddress } from "../../../data/usecase/DbUserAddress";
export const makeAddUserFactory = (): Controller => {
  const dbUser = new DbUser();
  const dbUserAddress = new DbUSerAddress();
  const userController = new AddUserController(dbUser, dbUserAddress);
  return userController;
};
