import { EntityNotFoundError } from "typeorm";
import { DbSupplierImpl } from "../../domain/db-supplier";
import { entityNotFound, ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ShowSupplierController implements Controller {
  private readonly dbSupplier: DbSupplierImpl;

  constructor(dbSupplier: DbSupplierImpl) {
    this.dbSupplier = dbSupplier;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const supplier = await this.dbSupplier.findById(id);
      return ok(supplier);
    } catch (e: any) {
      if (e instanceof EntityNotFoundError) {
        return entityNotFound(e);
      }
      return serverError(e);
    }
  }
}
