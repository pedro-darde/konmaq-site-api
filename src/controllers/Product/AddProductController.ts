import { validate } from "class-validator";
import { DbProductImpl } from "../../domain/db-product";
import { DbProductCategoryImpl } from "../../domain/db-product-category";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { ProductCategory } from "../../models/ProductCategory";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddProductController implements Controller {
  private readonly dbProduct: DbProductImpl;
  private readonly dbProductCategory: DbProductCategoryImpl;

  constructor(
    dbProduct: DbProductImpl,
    dbProductCategory: DbProductCategoryImpl
  ) {
    this.dbProduct = dbProduct;
    this.dbProductCategory = dbProductCategory;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { product } = httpRequest.body;
      const productParsed = this.dbProduct.create(product);

      const errors = await validate(productParsed, {
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

      const productAdded = await this.dbProduct.add(product);

      const productCategories: ProductCategory[] = [];

      if (product.categories.length > 0) {
        product.categories.forEach((id: any) => {
          productCategories.push({ category: id, product: productAdded });
        });

        await this.dbProductCategory.add(productCategories);
      }

      return ok(productAdded);
    } catch (e: any) {
      console.log(e);
      return serverError(e);
    }
  }
}
