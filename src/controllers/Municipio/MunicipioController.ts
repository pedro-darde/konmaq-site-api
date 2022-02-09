import { DbMunicipioImpl } from "../../domain/db-municipio";
import { ok, serverError } from "../../helpers/http-helper";
import { Controller } from "../../protocols/Controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class MunicipioController implements Controller {
  private readonly dbMunicipio: DbMunicipioImpl;

  constructor(dbMunicipio: DbMunicipioImpl) {
    this.dbMunicipio = dbMunicipio;
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { uf } = httpRequest.params;
      const municipios = await this.dbMunicipio.findByUF(uf);
      return ok(municipios);
    } catch (e: any) {
      return serverError(e);
    }
  }
}
