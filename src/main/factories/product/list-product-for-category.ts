import {Controller} from "../../../protocols/Controller";
import {DbProductCategory} from "../../../data/usecase/DbProductCategory";
import {ListProductsForCategoryController} from "../../../controllers/Product/ListProductsForCategoryController";

export const makeListProductsForCategoryFactory = (): Controller => {
    const dbProductCategory = new DbProductCategory()
    return new ListProductsForCategoryController(dbProductCategory)
}
