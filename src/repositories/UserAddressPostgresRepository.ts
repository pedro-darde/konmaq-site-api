import { AbstractRepository, EntityRepository } from "typeorm";
import { UserAddressRepostory } from "../data/protocols/UserAddressRepository";
import { UserAddress } from "../models/UserAddress";

@EntityRepository(UserAddress)
export class UserAddressPostgresRepository
  extends AbstractRepository<UserAddress>
  implements UserAddressRepostory
{
  async add(userAddress: UserAddress): Promise<UserAddress> {
    return await this.repository.save(userAddress);
  }

  create: (user: Partial<UserAddress>) => UserAddress;

  edit: (id: number, entity: Partial<UserAddress>) => Promise<UserAddress>;

  findAll: () => Promise<UserAddress[]>;

  findById: (id: number) => Promise<UserAddress>;
}
