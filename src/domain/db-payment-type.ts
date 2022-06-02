import { PaymentType } from "../models/PaymentType";

export interface DbPaymentTypeImpl {
    add(paymentType: PaymentType): Promise<PaymentType>
    create(paymentType: Partial<PaymentType>): PaymentType
    edit(id: number, paymentType: Partial<PaymentType>): Promise<PaymentType>
    findById(id: number): Promise<PaymentType>
}