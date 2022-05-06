import { getCustomRepository } from "typeorm";
import { DbPaymentTypeImpl } from "../../domain/db-payment-type";
import { PaymentType } from "../../models/PaymentType";
import { PaymentTypePostgresRepository } from "../../repositories/PaymentTypePostgresRepository";

export class DbPaymentType implements DbPaymentTypeImpl {

    create(paymentType: Partial<PaymentType>): PaymentType {
        const repo = getCustomRepository(PaymentTypePostgresRepository)
        return repo.create(paymentType)
    }

    async add(paymentType: PaymentType): Promise<PaymentType> {
        const repo = getCustomRepository(PaymentTypePostgresRepository)
        return await repo.add(paymentType)
    }
}