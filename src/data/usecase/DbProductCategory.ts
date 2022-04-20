import {getCustomRepository} from "typeorm";
import {DbAddProductCategory, DbProductCategoryImpl} from "../../domain/db-product-category";
import {ProductCategory} from "../../models/ProductCategory";
import {ProductCategoryPostgresRepository} from "../../repositories/ProductCategoryPostgresRepository";
import {CustomProductFind} from "../protocols/ProductRepository";

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

    async findCategoriesForProduct(product_id: number) {
        const repo = getCustomRepository(ProductCategoryPostgresRepository)
        return await repo.findCategoriesForProduct(product_id)
    }

    async removeByProductAndCategory(ids_category: number[], product: CustomProductFind): Promise<void> {
        const repo = getCustomRepository(ProductCategoryPostgresRepository)
        await repo.removeByProductAndCategory(ids_category, product)
    }

    async findByCategory(category_id: number) {
        const repo = getCustomRepository(ProductCategoryPostgresRepository)
        return await repo.findByCategory(category_id)
    }

    create(productCategory: Partial<ProductCategory>): ProductCategory {
        const repo = getCustomRepository(ProductCategoryPostgresRepository);
        return repo.create(productCategory);
    }
}
