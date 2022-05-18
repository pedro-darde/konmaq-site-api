import { Decrypter } from "../../data/protocols/Decrypter";
import { DbUser } from "../../data/usecase/DbUser";
import { DbUserAccount } from "../../domain/db-account";
import { LoadAccountByToken } from "../../domain/load-account-by-token";
import { AccessDeniedError } from "../../errors/AccessDeniedError";
import { forbidden, ok, serverError } from "../../helpers/http-helper";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { Middleware } from "../../protocols/Middleware";

export class AuthMiddleware implements Middleware {
    private readonly dbUser: LoadAccountByToken
    private readonly role?: string
    private readonly decrypter: Decrypter

    constructor(dbUser: LoadAccountByToken, decrypter: Decrypter, role?: string,) {
        this.dbUser = dbUser
        this.role = role
        this.decrypter = decrypter
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
            const [_, accessToken] = request.headers?.['x-access-token'].split(" ")
            if (accessToken) {
                const isValid = await this.decrypter.decrypt(accessToken)
                if (isValid) {
                    const account = await this.dbUser.load(accessToken, this.role)
                    if (account) return ok({ accountId: account.id })
                }
            }
            return forbidden(new AccessDeniedError())
        } catch (err) {
            console.log(err)
            return serverError(new Error())
        }
    }
}