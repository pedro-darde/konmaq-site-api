import { DbUserAddressImpl } from "../../domain/db-user-address";
import { ok } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class GetUserAddressesController implements Controller {
  private readonly dbUserAddress: DbUserAddressImpl;

  constructor(dbUserAddress: DbUserAddressImpl) {
    this.dbUserAddress = dbUserAddress;
  }

  async handle({ params }: HttpRequest): Promise<HttpResponse> {
    const { id } = params;

    const userAddresses = await this.dbUserAddress.findByUserId(id);

    return ok(userAddresses);
  }
}
