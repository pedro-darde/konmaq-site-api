import { DbPaymentTypeImpl } from "../../domain/db-payment-type";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ListPaymentTypeController implements Controller {
  private readonly dbPaymentTypeImpl: DbPaymentTypeImpl;

  constructor(dbPaymentTypeImpl: DbPaymentTypeImpl) {
    this.dbPaymentTypeImpl = dbPaymentTypeImpl;
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    const paymentTypes = await this.dbPaymentTypeImpl.findAll();
    return ok(paymentTypes);
  }
}
