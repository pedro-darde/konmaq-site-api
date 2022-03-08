import { ListProductController } from "../../../controllers/Product/ListProductController";
import { ListProductHomepage } from "../../../controllers/Product/ListProductHomepage";
import { DbProduct } from "../../../data/usecase/DbProduct";
import { Controller } from "../../../protocols/Controller";

export const makeListProductHomepageFactory = (): Controller => {
  const dbProduct = new DbProduct()
  const productCategoryController = new ListProductHomepage(dbProduct)
  return productCategoryController
};

