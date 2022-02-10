import { DbCategoryImpl } from "../../domain/db-category";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ListCategoryController implements Controller {
  private readonly dbCategory: DbCategoryImpl;

  constructor(dbCategory: DbCategoryImpl) {
    this.dbCategory = dbCategory;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const categories = await this.dbCategory.findAll();
      return ok(categories);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
