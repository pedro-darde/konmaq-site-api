import { UserAddress } from "../../models/UserAddress";
import { IRepository } from "./IRepository";

export interface UserAddressRepostory extends IRepository<UserAddress> {
  findByUser: (user_id: number) => Promise<UserAddress[]>;
}
