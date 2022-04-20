import { PageListCategory } from "../../../controllers/Category/PageListCategory"
import { DbCategory } from "../../../data/usecase/DbCategory"
import { Controller } from "../../../protocols/Controller"

export const makePageListCategory = (): Controller => {
    const dbCategory = new DbCategory();
    const pageListCategory = new PageListCategory(dbCategory)
    return pageListCategory
}