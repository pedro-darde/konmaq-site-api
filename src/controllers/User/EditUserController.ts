import { validate } from "class-validator";
import { DbUserAccount } from "../../domain/db-account";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { User } from "../../models/User";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class EditUserController implements Controller {
  private readonly dbUser: DbUserAccount;

  constructor(dbUser: DbUserAccount) {
    this.dbUser = dbUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { user } = httpRequest.body;
      const { id } = httpRequest.params;
      // const errors = await validate(user as User, { stopAtFirstError: false });

      // if (errors.length > 0) {
      //   return badRequest(errors);
      // }

      const account = await this.dbUser.edit(id, user);
      return ok(account);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
