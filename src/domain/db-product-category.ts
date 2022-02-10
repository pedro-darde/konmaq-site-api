import { ProductCategory } from "../models/ProductCategory";

export interface DbProductCategoryImpl {
  add: (productCategory: DbAddProductCategory[]) => Promise<ProductCategory[]>;
  findAll: () => Promise<ProductCategory[]>;
  create: (productCategory: Partial<ProductCategory>) => ProductCategory;
}

export type DbAddProductCategory = ProductCategory;
export type DbEditProductCategory = Partial<ProductCategory>;
