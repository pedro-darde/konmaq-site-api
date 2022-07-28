import { GetUserAddressesController } from "../../../controllers/User/GetUserAddressController";
import { DbUSerAddress } from "../../../data/usecase/DbUserAddress";

export const makeGetUserAddressFactory = () => {
  const dbUserAddress = new DbUSerAddress();
  const getUserAdressesController = new GetUserAddressesController(
    dbUserAddress
  );
  return getUserAdressesController;
};
