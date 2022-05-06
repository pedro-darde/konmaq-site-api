import { Encrypter } from "../../data/protocols/Encrypter";
import { DbUser } from "../../data/usecase/DbUser";
import { ok, serverError } from "../../helpers/http-helper";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { Middleware } from "../../protocols/Middleware";

export class ResetTokenMiddleware implements Middleware {
    private readonly dbUser: DbUser
    private readonly encrypter: Encrypter

    constructor(dbUser: DbUser, encrypter: Encrypter) {
        this.encrypter = encrypter
        this.dbUser = dbUser
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
            const account = await this.dbUser.findByToken(request.headers?.['x-access-token'])
            const newAccessToken = await this.encrypter.encrypt(account?.id?.toString()!)
            await this.dbUser.updateAccessToken(account?.id!, newAccessToken)
            return ok({ newAccessToken })
        } catch (err) {
            return serverError(new Error())
        }
    }
}