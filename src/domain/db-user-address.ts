import { UserAddress } from "../models/UserAddress";

export interface DbUserAddressImpl {
  add: (userAddress: UserAddress) => Promise<UserAddress>;
  edit: (id: number, userAddress: UserAddress) => Promise<UserAddress>;
  findById: (id: number) => Promise<UserAddress>;
  findAll: () => Promise<UserAddress[]>;
}
