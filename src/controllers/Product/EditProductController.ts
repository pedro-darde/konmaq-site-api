import { CustomProductFind } from "../../data/protocols/ProductRepository";
import { DbProductImpl } from "../../domain/db-product";
import { DbProductCategoryImpl } from "../../domain/db-product-category";
import { DbProductFileImpl } from "../../domain/db-product-file";
import { ok, serverError } from "../../helpers/http-helper";
import { Product } from "../../models/Product";
import { ProductCategory } from "../../models/ProductCategory";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EditProductController implements Controller {
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
      const { product } = httpRequest.body;
      const { id } = httpRequest.params;
      
      await this.updateProductCategories(product);
      
      // se eu nao faço essa coisa horrivel o orm tenta dar update nas entidades ...
      this.clearRelationFields(product)
      
      const productEdited = await this.dbProduct.edit(id, product);
      return ok(productEdited);
    } catch (e: any) {
      console.log(e)
      return serverError(e);
    }
  }

  private async updateProductCategories(product: CustomProductFind) {
    const productCategories: ProductCategory[] = [];

    const currentCategories = (await this.dbProductCategory.findCategoriesForProduct(product.id)).map((pc) => pc.category.id);
    const newCategories = product.categories;
    const toInsert = newCategories.filter((cat) => !currentCategories.includes(cat));
    const toRemove = currentCategories.filter((cat) => !newCategories.includes(cat));

    // inserindo as novas categorias
    toInsert.forEach((id: any) => productCategories.push({ category: id, product: product.id  as any}));
    await this.dbProductCategory.add(productCategories);
    
    // removendo as categorias que nao existem mais
    if(toRemove.length > 0) await this.dbProductCategory.removeByProductAndCategory(toRemove, product)
  }

  private clearRelationFields(product: any) {
      delete product.categories
      delete product.files

      return product
  }
}
