import { DbPaymentTypeImpl } from "../../domain/db-payment-type";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EditPaymentTypeController implements Controller {
    private readonly dbPaymentType: DbPaymentTypeImpl

    constructor(dbPaymentType: DbPaymentTypeImpl) {
        this.dbPaymentType = dbPaymentType
    }

    async handle(req: HttpRequest): Promise<HttpResponse> {
        const { id } = req.params
        const { paymentType } = req.body
        console.log(paymentType)
        const paymentEdited = await this.dbPaymentType.edit(id, paymentType)
        return ok(paymentEdited)
    }
}