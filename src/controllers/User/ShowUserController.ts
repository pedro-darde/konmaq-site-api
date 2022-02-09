import { EntityNotFoundError } from "typeorm";
import { DbUserAccount } from "../../domain/db-account";
import { entityNotFound, ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class ShowUserController implements Controller {
  private readonly dbUser: DbUserAccount;

  constructor(dbUser: DbUserAccount) {
    this.dbUser = dbUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;
      const user = await this.dbUser.findById(id);
      return ok(user);
    } catch (e: any) {
      if (e instanceof EntityNotFoundError) {
        return entityNotFound(e);
      }
      return serverError(e);
    }
  }
}
