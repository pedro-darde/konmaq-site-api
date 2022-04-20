import {AbstractRepository, EntityRepository} from "typeorm";
import {ProductCategoryRepository} from "../data/protocols/ProductCategoryRepository";
import {CustomProductFind} from "../data/protocols/ProductRepository";
import {ProductCategory} from "../models/ProductCategory";
import {Product} from "../models/Product";

@EntityRepository(ProductCategory)
export class ProductCategoryPostgresRepository
    extends AbstractRepository<ProductCategory>
    implements ProductCategoryRepository {
    async add(productCategory: ProductCategory[]): Promise<ProductCategory[]> {
        const productCategoryAdd = await this.repository.save(productCategory);
        return productCategoryAdd;
    }

    async findAll(): Promise<ProductCategory[]> {
        return this.repository.find({order: {id: `DESC`}});
    }

    create(productCategory: Partial<ProductCategory>): ProductCategory {
        return this.repository.create(productCategory);
    }

    async findCategoriesForProduct(product_id: number) {
        return this.repository.find({
            relations: ["category"],
            where: {product: product_id},
        });
    }

    async removeByProductAndCategory(ids_category: number[], product: CustomProductFind): Promise<void> {
        ids_category.forEach(async category => {
            /* @ts-ignore */
            await this.repository.delete({product: product.id, category: category})
        })
    };

    async findByCategory(category_id: number): Promise<Product[]> {
        const productsCategories = await this.repository.find({where: {category: category_id}, relations: ['product']})
        return productsCategories.filter(pC => pC.product)?.map(pC => pC.product)
    }
}
