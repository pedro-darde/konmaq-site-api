import { validate } from "class-validator";
import { DbUserAccount } from "../../domain/db-account";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddUserController implements Controller {
  private readonly dbUser: DbUserAccount;

  constructor(dbUser: DbUserAccount) {
    this.dbUser = dbUser;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { user } = httpRequest.body;
      const userParsed = this.dbUser.create(user);
      const errors = await validate(userParsed, { stopAtFirstError: false });
      if (errors.length > 0) {
        let validationErrors: Array<string> = [];
        errors.forEach((err) => {
          const { constraints } = err;
          /* @ts-ignore*/
          validationErrors.push(Object.values(constraints)[0]);
        });
        console.log(validationErrors);
        return badRequest(validationErrors);
      }

      const account = await this.dbUser.add(user);
      return ok(account);
    } catch (e: any) {
      console.log(e)
      return serverError(e);
    }
  }
}
