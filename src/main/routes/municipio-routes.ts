import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { makeListMunicipios } from "../factories/municipio/municipios-list-factory";

export default (router: Router) => {
  //create user
  router.get("/municipios/:uf", adaptRoute(makeListMunicipios()));
};
