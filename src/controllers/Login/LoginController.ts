import { Authentication } from "../../domain/authentication";
import { ok, unauthorized } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class LoginController implements Controller {
    private readonly authentication: Authentication

    constructor(authentication: Authentication) {
        this.authentication = authentication
    }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const { email, password } = httpRequest.body

        const accessToken = await this.authentication.auth({ email, password })

        if (!accessToken) {
            return unauthorized()
        }

        return ok({ accessToken })
    }
}