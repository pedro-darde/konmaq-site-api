import { validate, ValidationError } from "class-validator";
import { fileDir } from "../../constants/fileDir";
import { DbProductImpl } from "../../domain/db-product";
import { DbProductCategoryImpl } from "../../domain/db-product-category";
import { DbProductFileImpl } from "../../domain/db-product-file";
import { File } from "../../domain/file";
import {
  badRequest,
  ok,
  serverError,
  validationError,
} from "../../helpers/http-helper";
import { Product } from "../../models/Product";
import { ProductCategory } from "../../models/ProductCategory";
import { ProductFile } from "../../models/ProductFile";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddProductController implements Controller {
  private readonly dbProduct: DbProductImpl;
  private readonly dbProductCategory: DbProductCategoryImpl;
  private readonly dbProductFile: DbProductFileImpl;

  constructor(
    dbProduct: DbProductImpl,
    dbProductCategory: DbProductCategoryImpl,
    dbProductFile: DbProductFileImpl
  ) {
    this.dbProduct = dbProduct;
    this.dbProductCategory = dbProductCategory;
    this.dbProductFile = dbProductFile;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      let { product } = httpRequest.body;
      product = JSON.parse(product);
      const productParsed = this.dbProduct.create(product);

      const errors = await validate(productParsed, {
        stopAtFirstError: false,
      });

      if (errors.length > 0) {
        let validationErrors: Array<string> = [];
        errors.forEach((err) => {
          const { constraints } = err;
          /* @ts-ignore */
          validationErrors.push(Object.values(constraints)[0]);
        });
        return validationError(validationErrors);
      }

      const productAdded = await this.dbProduct.add(product);

      if (product.categories.length > 0) {
        await this.addProductCategory(product.categories, productAdded);
      }

      if (httpRequest.body.files && httpRequest.body.files.length > 0) {
        await this.addProductFiles(httpRequest.body.files, productAdded);
      }
      return ok(productAdded);
    } catch (e: any) {
      console.log(e);
      return serverError(e);
    }
  }

  private async addProductCategory(
    categories: Array<number>,
    product: Product
  ) {
    const productCategories: ProductCategory[] = [];
    categories.forEach((id: any) => {
      productCategories.push({ category: id, product: product });
    });

    await this.dbProductCategory.add(productCategories);
  }

  private async addProductFiles(files: Array<File>, product: Product) {
    const productFiles: ProductFile[] = [];

    files.forEach((file) => {
      const pathFile = `${process.env.API_URL}${fileDir}/${file.name}`;
      productFiles.push({
        filename: file.name,
        product: product,
        path: pathFile,
      });
    });

    await this.dbProductFile.add(productFiles);
  }
}
