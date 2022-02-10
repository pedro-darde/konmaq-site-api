import { DbCategoryImpl } from "../../domain/db-category";
import { DbSupplierImpl } from "../../domain/db-supplier";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ListSupplierController implements Controller {
  private readonly dbSupplier: DbSupplierImpl;

  constructor(dbSupplier: DbSupplierImpl) {
    this.dbSupplier = dbSupplier;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const suppliers = await this.dbSupplier.findAll();
      return ok(suppliers);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
