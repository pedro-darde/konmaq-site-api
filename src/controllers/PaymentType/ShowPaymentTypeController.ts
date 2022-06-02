import { DbPaymentType } from "../../data/usecase/DbPaymentType";
import { DbPaymentTypeImpl } from "../../domain/db-payment-type";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ShowPaymentTypeController implements Controller {
    private readonly dbPaymentType: DbPaymentTypeImpl

    constructor(dbPaymentType: DbPaymentType) {
        this.dbPaymentType = dbPaymentType
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest.params
        const paymentType = await this.dbPaymentType.findById(id)
        console.log(paymentType)
        return ok(paymentType)
    }
}