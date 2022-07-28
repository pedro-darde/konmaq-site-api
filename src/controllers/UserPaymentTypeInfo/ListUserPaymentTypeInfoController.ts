import { DbUserPaymentTypeInfoImpl } from "../../domain/db-user-payment-type-info";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ListUserPaymentTypeController implements Controller {
  private readonly dbUserPaymentTypeInfo: DbUserPaymentTypeInfoImpl;

  constructor(dbUserPaymentTypeInfo: DbUserPaymentTypeInfoImpl) {
    this.dbUserPaymentTypeInfo = dbUserPaymentTypeInfo;
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { user_id } = req.params;

      const infos = await this.dbUserPaymentTypeInfo.loadByUser(user_id);

      return ok(infos);
    } catch (error: any) {
      return serverError(error);
    }
  }
}
