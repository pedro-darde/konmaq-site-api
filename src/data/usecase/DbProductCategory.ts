import { getCustomRepository } from "typeorm";
import { DbAddProductCategory, DbProductCategoryImpl } from "../../domain/db-product-category";
import { ProductCategory } from "../../models/ProductCategory";
import { ProductCategoryPostgresRepository } from "../../repositories/ProductCategoryPostgresRepository";
export class DbProductCategory implements DbProductCategoryImpl {
  async add(productCategory: DbAddProductCategory[]): Promise<ProductCategory[]> {
    const repo = getCustomRepository(ProductCategoryPostgresRepository);
    const newProductCategory = await repo.add(productCategory);
    return newProductCategory;
  }

  async findAll(): Promise<ProductCategory[]> {
    const repo = getCustomRepository(ProductCategoryPostgresRepository);
    return await repo.findAll();
  }

  create(productCategory: Partial<ProductCategory>): ProductCategory {
    const repo = getCustomRepository(ProductCategoryPostgresRepository);
    return repo.create(productCategory);
  }
}
