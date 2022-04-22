import { EditProductController } from "../../../controllers/Product/EditProductController";
import { DbProduct } from "../../../data/usecase/DbProduct";
import { DbProductCategory } from "../../../data/usecase/DbProductCategory";
import { DbProductFile } from "../../../data/usecase/DbProductFile";
import { SharpFileFormatter } from "../../../infra/SharpFileFormatter";
import { Controller } from "../../../protocols/Controller";

export const makeEditProductFactory = (): Controller => {
  const sharpFormatter = new SharpFileFormatter();
  const dbProduct = new DbProduct();
  const dbProductCategory = new DbProductCategory();
  const dbFile = new DbProductFile(sharpFormatter);
  const productCategoryController = new EditProductController(
    dbProduct,
    dbProductCategory,
    dbFile
  );
  return productCategoryController;
};
