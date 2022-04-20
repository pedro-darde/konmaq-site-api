import { CustomProductFind } from "../data/protocols/ProductRepository";
import { ProductCategory } from "../models/ProductCategory";
import {Product} from "../models/Product";

export interface DbProductCategoryImpl {
  add: (productCategory: DbAddProductCategory[]) => Promise<ProductCategory[]>;
  findAll: () => Promise<ProductCategory[]>;
  create: (productCategory: Partial<ProductCategory>) => ProductCategory;
  findCategoriesForProduct: (product_id: number) => Promise<ProductCategory[]>;
  removeByProductAndCategory: (
    ids_category: number[],
    product: CustomProductFind
  ) => Promise<void>;
  findByCategory: (category_id: number) => Promise<Product[]>
}

export type DbAddProductCategory = ProductCategory;
export type DbEditProductCategory = Partial<ProductCategory>;
