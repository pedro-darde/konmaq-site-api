import { Municipio } from "../../models/Municipio";

export interface MunicipioRepository {
  findByUF: (uf: number) => Promise<Municipio[]>;
}
