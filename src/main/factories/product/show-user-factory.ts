import { EditProductController } from "../../../controllers/Product/EditProductController";
import { ShowProductController } from "../../../controllers/Product/ShowProductController";
import { DbProduct } from "../../../data/usecase/DbProduct";
import { Controller } from "../../../protocols/Controller";

export const makeShowProductFactory = (): Controller => {
  const dbProduct = new DbProduct()
  const productCategoryController = new ShowProductController(dbProduct)
  return productCategoryController
};
