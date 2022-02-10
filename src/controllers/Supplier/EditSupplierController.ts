import { DbSupplierImpl } from "../../domain/db-supplier";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EditSupplierController implements Controller {
  private readonly dbSupplier: DbSupplierImpl;

  constructor(dbSupplier: DbSupplierImpl) {
    this.dbSupplier = dbSupplier;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { supplier } = httpRequest.body;
      const { id } = httpRequest.params;

      const categoryEdited = await this.dbSupplier.edit(id, supplier);
      return ok(categoryEdited);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
