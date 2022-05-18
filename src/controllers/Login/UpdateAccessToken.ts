import { Encrypter } from "../../data/protocols/Encrypter";
import { DbUserAccount } from "../../domain/db-account";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class UpdateAccessTokenController implements Controller {
    private readonly dbUser: DbUserAccount
    private readonly encrypter: Encrypter

    constructor(dbUser: DbUserAccount, encrypter: Encrypter) {
        this.dbUser = dbUser
        this.encrypter = encrypter
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { id } = httpRequest.body

        const account = await this.dbUser.findById(id)
        const accessToken = await this.encrypter.encrypt(account.id?.toString()!, account.name_social_name, account.type)

        return ok({ accessToken })
    }
}