import { DbProductImpl } from "../../domain/db-product";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class FindByIdsProductController implements Controller {
    private readonly dbProduct: DbProductImpl

    constructor(dbProduct: DbProductImpl) {
        this.dbProduct = dbProduct
    }

    async handle(req: HttpRequest): Promise<HttpResponse> {
        const { ids } = req.body
        const products = await this.dbProduct.findByIds(ids)
        return ok(products)
    }
}