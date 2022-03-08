import { AbstractRepository, EntityRepository } from "typeorm";
import { ProductCategoryRepository } from "../data/protocols/ProductCategoryRepository";
import { CustomProductFind } from "../data/protocols/ProductRepository";
import { ProductCategory } from "../models/ProductCategory";

@EntityRepository(ProductCategory)
export class ProductCategoryPostgresRepository
  extends AbstractRepository<ProductCategory>
  implements ProductCategoryRepository
{
  async add(productCategory: ProductCategory[]): Promise<ProductCategory[]> {
    const productCategoryAdd = await this.repository.save(productCategory);
    return productCategoryAdd;
  }

  async findAll(): Promise<ProductCategory[]> {
    return this.repository.find({ order: { id: `DESC` } });
  }

  create(productCategory: Partial<ProductCategory>): ProductCategory {
    return this.repository.create(productCategory);
  }

  async findCategoriesForProduct(product_id: number) {
    return this.repository.find({
      relations: ["category"],
      where: { product: product_id },
    });
  }

  async removeByProductAndCategory (ids_category: number[], product: CustomProductFind) : Promise<void> {
    ids_category.forEach(async category => {
      /* @ts-ignore */
      await this.repository.delete({ product: product.id, category: category})
    })
  };
}
