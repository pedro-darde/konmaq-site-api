import { Controller } from "../../../protocols/Controller";
import { DbCategory } from "../../../data/usecase/DbCategory";
import { AddCategoryController } from "../../../controllers/Category/AddCategoryController";
export const makeAddCategoryFactory = (): Controller => {
  const dbCategory = new DbCategory();
  const categoryController = new AddCategoryController(dbCategory);
  return categoryController;
};
