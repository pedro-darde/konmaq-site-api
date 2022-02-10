import { AddProductController } from "../../../controllers/Product/AddProductController";
import { DbProduct } from "../../../data/usecase/DbProduct";
import { DbProductCategory } from "../../../data/usecase/DbProductCategory";
import { Controller } from "../../../protocols/Controller";

export const makeAddProductFactory = (): Controller => {
  const dbProduct = new DbProduct()
  const dbProductCategory = new DbProductCategory()

  const productCategoryController = new AddProductController(dbProduct, dbProductCategory)

  return productCategoryController
};
