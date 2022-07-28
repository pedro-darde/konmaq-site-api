import { getCustomRepository } from "typeorm";
import { DbUserAddressImpl } from "../../domain/db-user-address";
import { UserAddress } from "../../models/UserAddress";
import { UserAddressPostgresRepository } from "../../repositories/UserAddressPostgresRepository";

export class DbUSerAddress implements DbUserAddressImpl {
  async add(userAddress: UserAddress): Promise<UserAddress> {
    const repo = getCustomRepository(UserAddressPostgresRepository);
    return await repo.add(userAddress);
  }
  edit: (id: number, userAddress: UserAddress) => Promise<UserAddress>;
  findById: (id: number) => Promise<UserAddress>;

  async findByUserId(user_id: number): Promise<UserAddress[]> {
    const repo = getCustomRepository(UserAddressPostgresRepository);
    return await repo.findByUser(user_id);
  }

  findAll: () => Promise<UserAddress[]>;
}
