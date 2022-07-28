import { AbstractRepository, EntityRepository } from "typeorm";
import { UserPaymentTypeInfoRepository } from "../data/protocols/UserPaymentTypeRepository";
import { UserPaymentTypeInfo } from "../models/UserPaymentTypeInfo";

@EntityRepository(UserPaymentTypeInfo)
export class UserPaymentTypeInfoPostgres
  extends AbstractRepository<UserPaymentTypeInfo>
  implements UserPaymentTypeInfoRepository
{
  edit: (
    id: number,
    entity: Partial<UserPaymentTypeInfo>
  ) => Promise<UserPaymentTypeInfo>;
  findById: (id: number) => Promise<UserPaymentTypeInfo>;
  findAll: () => Promise<UserPaymentTypeInfo[]>;
  create: (user: Partial<UserPaymentTypeInfo>) => UserPaymentTypeInfo;

  async add(entity: UserPaymentTypeInfo): Promise<UserPaymentTypeInfo> {
    return await this.repository.save(entity);
  }

  async loadByUser(user_id: number): Promise<UserPaymentTypeInfo[]> {
    return await this.repository.find({ where: { user: user_id, main: true } });
  }
}
