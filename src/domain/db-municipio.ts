import { Municipio } from "../models/Municipio";

export interface DbMunicipioImpl {
  findByUF: (uf: number) => Promise<Municipio[]>;
}
