import { ListProductController } from "../../../controllers/Product/ListProductController";
import { DbProduct } from "../../../data/usecase/DbProduct";
import { Controller } from "../../../protocols/Controller";

export const makeListProductFactory = (): Controller => {
  const dbProduct = new DbProduct()
  const productCategoryController = new ListProductController(dbProduct)
  return productCategoryController
};

