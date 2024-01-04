import { AbstractRepository, EntityRepository } from "typeorm";
import { MunicipioRepository } from "../data/protocols/MunicipioRepository";
import { Municipio } from "../models/Municipio";
import { log } from "console";

@EntityRepository(Municipio)
export class MunicipioPostgresRepository
  extends AbstractRepository<Municipio>
  implements MunicipioRepository
{
  async findByUF(uf: number): Promise<Municipio[]> {
    const municipios = this.repository.find({ where: { cod_estado: uf } });
    return municipios;
  }
}
