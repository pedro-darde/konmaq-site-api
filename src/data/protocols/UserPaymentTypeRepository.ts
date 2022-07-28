import { UserPaymentTypeInfo } from "../../models/UserPaymentTypeInfo";
import { IRepository } from "./IRepository";

export interface UserPaymentTypeInfoRepository
  extends IRepository<UserPaymentTypeInfo> {
  loadByUser: (user_id: number) => Promise<UserPaymentTypeInfo[]>;
}
