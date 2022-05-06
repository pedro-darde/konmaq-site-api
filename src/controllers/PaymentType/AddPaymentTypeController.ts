import { DbPaymentTypeImpl } from "../../domain/db-payment-type";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddPaymentTypeController implements Controller {
    private readonly dbPaymentType: DbPaymentTypeImpl

    constructor(dbPaymentType: DbPaymentTypeImpl) {
        this.dbPaymentType = dbPaymentType
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { paymentType } = request.body
        const paymentModeled = this.dbPaymentType.create(paymentType)
        const paymentTypeAdd = await this.dbPaymentType.add(paymentType)

        return ok(paymentTypeAdd)
    }
}