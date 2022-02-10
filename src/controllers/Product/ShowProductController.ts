import { EntityNotFoundError } from "typeorm";
import { DbProductImpl } from "../../domain/db-product";
import { DbSupplierImpl } from "../../domain/db-supplier";
import { entityNotFound, ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ShowProductController implements Controller {
  private readonly dbProduct: DbProductImpl;

  constructor(dbProduct: DbProductImpl) {
    this.dbProduct = dbProduct;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const product = await this.dbProduct.findById(id);
      return ok(product);
    } catch (e: any) {
      if (e instanceof EntityNotFoundError) {
        return entityNotFound(e);
      }
      return serverError(e);
    }
  }
}
