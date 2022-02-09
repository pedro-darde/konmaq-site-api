import { DbCategoryImpl } from "../../domain/db-category";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EditCategoryController implements Controller {
  private readonly dbCategory: DbCategoryImpl;

  constructor(dbCategory: DbCategoryImpl) {
    this.dbCategory = dbCategory;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { category } = httpRequest.body;
      const { id } = httpRequest.params;

      const categoryEdited = await this.dbCategory.edit(id, category);
      return ok(categoryEdited);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
