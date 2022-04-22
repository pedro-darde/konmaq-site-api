import { DbProductImpl } from "../../domain/db-product";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ListProductHomepage implements Controller {
  private readonly dbProduct: DbProductImpl;

  constructor(dbProduct: DbProductImpl) {
    this.dbProduct = dbProduct;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const products = await this.dbProduct.findAllToHomePage();
      return ok(products);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
