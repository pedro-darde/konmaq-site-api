import { DbUserAccount } from "../../domain/db-account";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ListUserController implements Controller {
  private readonly dbUser: DbUserAccount;

  constructor(dbUser: DbUserAccount) {
    this.dbUser = dbUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const users = await this.dbUser.findAll();
      return ok(users);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
