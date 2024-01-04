import { getCustomRepository } from "typeorm";
import { DbMunicipioImpl } from "../../domain/db-municipio";
import { Municipio } from "../../models/Municipio";
import { MunicipioPostgresRepository } from "../../repositories/MunicipioPostgresRepository";

export class DbMunicipio implements DbMunicipioImpl {
  async findByUF(uf: number): Promise<Municipio[]> {
    const repo = getCustomRepository(MunicipioPostgresRepository);
    const municipios = await repo.findByUF(uf);
    console.log(uf);

    return municipios;
  }
}
