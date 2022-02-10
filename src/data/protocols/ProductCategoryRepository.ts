import { ProductCategory } from "../../models/ProductCategory";
import { IRepository } from "./IRepository";

export interface ProductCategoryRepository
  extends Omit<IRepository<ProductCategory>, "edit" | "findById" | "add"> {
  add: (productCategories: ProductCategory[]) => Promise<ProductCategory[]>
}
