import { DbCategory } from "../../data/usecase/DbCategory";
import { ok, serverError } from "../../helpers/http-helper";
import { Category } from "../../models/Category";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class PageListCategory implements Controller {
    private readonly dbCategory: DbCategory

    constructor(dbCategory: DbCategory) {
        this.dbCategory = dbCategory
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const categories = await this.dbCategory.findForPage()
            return ok(categories)
        } catch (error: any) {
            console.log(error)
            return serverError(error)
        }
    };
}