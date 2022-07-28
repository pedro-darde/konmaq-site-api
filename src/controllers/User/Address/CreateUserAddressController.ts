import { DbUserAddressImpl } from "../../../domain/db-user-address";
import { ok, serverError } from "../../../helpers/http-helper";
import { Controller } from "../../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../../protocols/http";

export class CreateUserAddressController implements Controller {
  private readonly dbUserAddress: DbUserAddressImpl;

  constructor(dbUserAddress: DbUserAddressImpl) {
    this.dbUserAddress = dbUserAddress;
  }

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { user_address } = req.body;
      const adr = await this.dbUserAddress.add(user_address);

      return ok(adr);
    } catch (err: any) {
      console.log(err)
      return serverError(err);
    }
  }
}
