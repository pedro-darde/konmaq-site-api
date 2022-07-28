import { CreateUserAddressController } from "../../../controllers/User/Address/CreateUserAddressController";
import { DbUSerAddress } from "../../../data/usecase/DbUserAddress";

export const makeAddUserAddressFactory = () => {
  const dbUserAddress = new DbUSerAddress();
  const addUserAddressCtrler = new CreateUserAddressController(dbUserAddress);
  return addUserAddressCtrler;
};
