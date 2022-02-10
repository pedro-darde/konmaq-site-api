import { DbProductImpl } from "../../domain/db-product";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EditProductController implements Controller {
  private readonly dbProduct: DbProductImpl;

  constructor(dbProduct: DbProductImpl) {
    this.dbProduct = dbProduct;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { product } = httpRequest.body;
      const { id } = httpRequest.params;

      const productEdited = await this.dbProduct.edit(id, product);
      return ok(productEdited);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
