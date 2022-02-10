import { AddProductController } from "../../../controllers/Product/AddProductController";
import { DbProduct } from "../../../data/usecase/DbProduct";
import { DbProductCategory } from "../../../data/usecase/DbProductCategory";
import { DbProductFile } from "../../../data/usecase/DbProductFile";
import { SharpFileFormatter } from "../../../infra/SharpFileFormatter";
import { Controller } from "../../../protocols/Controller";

export const makeAddProductFactory = (): Controller => {

  const fileFormatter = new SharpFileFormatter()
  const dbProductFile = new DbProductFile(fileFormatter)
  const dbProduct = new DbProduct()
  const dbProductCategory = new DbProductCategory()

  const productCategoryController = new AddProductController(dbProduct, dbProductCategory, dbProductFile)

  return productCategoryController
};
