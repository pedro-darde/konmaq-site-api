import { getCustomRepository } from "typeorm";
import { DbUserPaymentTypeInfoImpl } from "../../domain/db-user-payment-type-info";
import { UserPaymentTypeInfo } from "../../models/UserPaymentTypeInfo";
import { UserPaymentTypeInfoPostgres } from "../../repositories/UserPaymentTypeInfoPostgres";

export class DbUserPaymentTypeInfo implements DbUserPaymentTypeInfoImpl {
  async add(data: Partial<UserPaymentTypeInfo>): Promise<UserPaymentTypeInfo> {
    const repo = getCustomRepository(UserPaymentTypeInfoPostgres);
    /** @ts-ignore */
    return await repo.add(data);
  }

  async loadByUser(user_id: number): Promise<UserPaymentTypeInfo[]> {
    const repo = getCustomRepository(UserPaymentTypeInfoPostgres);
    return await repo.loadByUser(user_id);
  }
}
