import { UserPaymentTypeInfo } from "../models/UserPaymentTypeInfo";

export interface DbUserPaymentTypeInfoImpl {
  add: (data: Partial<UserPaymentTypeInfo>) => Promise<UserPaymentTypeInfo>;
  loadByUser: (user_id: number) => Promise<UserPaymentTypeInfo[]>;
}
