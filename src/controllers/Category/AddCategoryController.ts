import { validate } from "class-validator";
import { DbCategoryImpl } from "../../domain/db-category";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddCategoryController implements Controller {
  private readonly dbCategory: DbCategoryImpl;

  constructor(dbCategory: DbCategoryImpl) {
    this.dbCategory = dbCategory;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { category } = httpRequest.body;
      const categoryParsed = this.dbCategory.create(category);
      const errors = await validate(categoryParsed, {
        stopAtFirstError: false,
      });

      if (errors.length > 0) {
        let validationErrors: Array<string> = [];
        errors.forEach((err) => {
          const { constraints } = err;
          /* @ts-ignore*/
          validationErrors.push(Object.values(constraints)[0]);
        });
        return badRequest(validationErrors);
      }

      const account = await this.dbCategory.add(category);
      return ok(account);
    } catch (e: any) {
      console.log(e);
      return serverError(e);
    }
  }
}
