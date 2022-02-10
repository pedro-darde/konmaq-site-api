import { ListCategoryController } from "../../../controllers/Category/ListCategoryController";
import { DbCategory } from "../../../data/usecase/DbCategory";
import { Controller } from "../../../protocols/Controller";

export const makeListCategoryFactory = (): Controller => {
  const dbCategory = new DbCategory();
  const categoryController = new ListCategoryController(dbCategory);
  return categoryController;
};
