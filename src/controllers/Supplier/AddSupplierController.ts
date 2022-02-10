import { validate } from "class-validator";
import { DbCategoryImpl } from "../../domain/db-category";
import { DbSupplierImpl } from "../../domain/db-supplier";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddSupplierController implements Controller {
  private readonly dbSupplier: DbSupplierImpl;

  constructor(dbSupplier: DbSupplierImpl) {
    this.dbSupplier = dbSupplier;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { supplier } = httpRequest.body;
      const supplierParsed = this.dbSupplier.create(supplier);
      const errors = await validate(supplierParsed, {
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

      const supplierAdd = await this.dbSupplier.add(supplier);
      return ok(supplierAdd);
    } catch (e: any) {
      console.log(e);
      return serverError(e);
    }
  }
}
