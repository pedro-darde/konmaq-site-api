import { EntityNotFoundError } from "typeorm";
import { DbCategoryImpl } from "../../domain/db-category";
import { entityNotFound, ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ShowCategoryController implements Controller {
  private readonly dbCategory: DbCategoryImpl;

  constructor(dbCategory: DbCategoryImpl) {
    this.dbCategory = dbCategory;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const category = await this.dbCategory.findById(id);
      return ok(category);
    } catch (e: any) {
      if (e instanceof EntityNotFoundError) {
        return entityNotFound(e);
      }
      return serverError(e);
    }
  }
}
