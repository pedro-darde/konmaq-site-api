import { validate } from "class-validator";
import { DbUserAccount } from "../../domain/db-account";
import { DbUserAddressImpl } from "../../domain/db-user-address";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { UserAddress } from "../../models/UserAddress";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class AddUserController implements Controller {
  private readonly dbUser: DbUserAccount;
  private readonly dbUserAddress: DbUserAddressImpl;

  constructor(dbUser: DbUserAccount, dbUserAddress: DbUserAddressImpl) {
    this.dbUser = dbUser;
    this.dbUserAddress = dbUserAddress;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      let { user, userAddress } = httpRequest.body;
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
      
      userAddress.user = account;

      console.log(userAddress)
      await this.saveAddress(userAddress);

      return ok(account);
    } catch (e: any) {
      console.log(e);
      return serverError(e);
    }
  }

  private async saveAddress(userAddress: UserAddress): Promise<UserAddress> {
    return await this.dbUserAddress.add(userAddress);
  }
}
