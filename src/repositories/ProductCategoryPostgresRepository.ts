import { AbstractRepository, EntityRepository } from "typeorm";
import { ProductCategoryRepository } from "../data/protocols/ProductCategoryRepository";
import { ProductCategory } from "../models/ProductCategory";

@EntityRepository(ProductCategory)
export class ProductCategoryPostgresRepository
  extends AbstractRepository<ProductCategory>
  implements ProductCategoryRepository
{
  async add(productCategory: ProductCategory): Promise<ProductCategory> {
    const productCategoryAdd = await this.repository.save(productCategory);
    return productCategoryAdd;
  }

  async findAll(): Promise<ProductCategory[]> {
    return this.repository.find({ order: { id: `DESC` } });
  }

  create(productCategory: Partial<ProductCategory>): ProductCategory {
    return this.repository.create(productCategory);
  }
}
