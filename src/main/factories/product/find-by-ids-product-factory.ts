import { FindByIdsProductController } from "../../../controllers/Product/FindByIdsProductController"
import { DbProduct } from "../../../data/usecase/DbProduct"

export const makeFindByIdsProduct = () => {
    const dbProduct = new DbProduct()
    return new FindByIdsProductController(dbProduct)
}