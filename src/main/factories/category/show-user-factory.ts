import { ShowCategoryController } from "../../../controllers/Category/ShowCategoryController";
import { DbCategory } from "../../../data/usecase/DbCategory";
import { Controller } from "../../../protocols/Controller";

export const makeShowCategoryFactory = (): Controller => {
  const dbCategory = new DbCategory();
  const categoryController = new ShowCategoryController(dbCategory);
  return categoryController;
};
