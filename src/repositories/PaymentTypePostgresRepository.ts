import { AbstractRepository, EntityRepository } from "typeorm";
import { PaymentTypeRepository } from "../data/protocols/PaymentTypeRepositorty";
import { PaymentType } from "../models/PaymentType";

@EntityRepository(PaymentType)
export class PaymentTypePostgresRepository extends AbstractRepository<PaymentType> implements PaymentTypeRepository {
    findAll: () => Promise<PaymentType[]>;

    async edit(id: number, entity: Partial<PaymentType>): Promise<PaymentType> {
        return await this.repository.save({ id, ...entity })
    };

    async findById(id: number): Promise<PaymentType> {
        return await this.repository.findOneOrFail(id)
    };

    async add(entity: PaymentType): Promise<PaymentType> {
        return await this.repository.save(entity)
    };

    create(paymentType: Partial<PaymentType>): PaymentType {
        return this.repository.create(paymentType)
    };
}