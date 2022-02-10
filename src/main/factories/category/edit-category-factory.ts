import { EditCategoryController } from "../../../controllers/Category/EditCategoryController";
import { DbCategory } from "../../../data/usecase/DbCategory";
import { Controller } from "../../../protocols/Controller";

export const makeEditCategoryFactory = (): Controller => {
  const dbCategory = new DbCategory();
  const categoryController = new EditCategoryController(dbCategory);
  return categoryController;
};
