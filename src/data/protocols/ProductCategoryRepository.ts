import { ProductCategory } from "../../models/ProductCategory";
import { IRepository } from "./IRepository";
import { CustomProductFind } from "./ProductRepository";

export interface ProductCategoryRepository
  extends Omit<IRepository<ProductCategory>, "edit" | "findById" | "add"> {
  add: (productCategories: ProductCategory[]) => Promise<ProductCategory[]>;
  findCategoriesForProduct: (product_id: number) => Promise<ProductCategory[]>;
  removeByProductAndCategory: (
    ids_category: number[],
    product: CustomProductFind
  ) => Promise<void>;
}
