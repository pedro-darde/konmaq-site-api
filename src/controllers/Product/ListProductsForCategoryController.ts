import {Controller} from "../../protocols/Controller";
import {HttpRequest, HttpResponse} from "../../protocols/http";
import {DbProductCategoryImpl} from "../../domain/db-product-category";
import {ok} from "../../helpers/http-helper";

export class ListProductsForCategoryController implements Controller {

    private readonly dbProductCategory: DbProductCategoryImpl

    constructor(dbProductCategory: DbProductCategoryImpl) {
        this.dbProductCategory = dbProductCategory
    }

    async handle({params}: HttpRequest): Promise<HttpResponse> {
        const {category_id} = params

        const products = await this.dbProductCategory.findByCategory(category_id)

        return ok(products)
    }
}
