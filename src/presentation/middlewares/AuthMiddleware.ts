import { Decrypter } from "../../data/protocols/Decrypter";
import { Encrypter } from "../../data/protocols/Encrypter";
import { DbUser } from "../../data/usecase/DbUser";
import { DbUserAccount } from "../../domain/db-account";
import { LoadAccountByToken } from "../../domain/load-account-by-token";
import { AccessDeniedError } from "../../errors/AccessDeniedError";
import { forbidden, ok, serverError } from "../../helpers/http-helper";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { Middleware } from "../../protocols/Middleware";

export class AuthMiddleware implements Middleware {
    private readonly dbUserToken: LoadAccountByToken
    private readonly role?: string
    private readonly decrypter: Decrypter
    private readonly encrypter: Encrypter
    private readonly dbUser: DbUser

    constructor(dbUserToken: LoadAccountByToken, decrypter: Decrypter, encrypter: Encrypter, dbUser: DbUser, role?: string) {
        this.dbUserToken = dbUserToken
        this.role = role
        this.decrypter = decrypter
        this.encrypter = encrypter
        this.dbUser = dbUser
    }

    async handle(request: HttpRequest): Promise<HttpResponse> {
        try {
            let [_, accessToken] = request.headers?.['x-access-token'].split(" ")

            if (accessToken) {
                const isValid = await this.decrypter.decrypt(accessToken)
                if (isValid) {
                    const { exp, id, userName, role } = isValid

                    if (new Date() >= new Date(exp)) {
                        accessToken = await this.encrypter.encrypt(id, userName, role)
                        await this.dbUser.updateAccessToken(id, accessToken)
                        return ok({ accountId: id })
                    }

                    const account = await this.dbUserToken.load(accessToken, this.role)
                    if (account) return ok({ accountId: account.id })
                }
            }
            return forbidden(new AccessDeniedError())
        } catch (err) {
            console.log(' deu pau aqui', err)
            return serverError(new Error())
        }
    }
}