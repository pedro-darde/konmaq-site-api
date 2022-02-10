import { MunicipioController } from "../../../controllers/Municipio/MunicipioController";
import { DbMunicipio } from "../../../data/usecase/DbMunicipio";
import { Controller } from "../../../protocols/Controller";

export const makeListMunicipios = (): Controller => {
  const dbMunicipio = new DbMunicipio();
  const municipioController = new MunicipioController(dbMunicipio);
  return municipioController;
};
