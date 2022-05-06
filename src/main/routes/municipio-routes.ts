import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { adminAuth } from "../factories/middlewares/admin-auth";
import { makeResetToken } from "../factories/middlewares/reset-token";
import { makeListMunicipios } from "../factories/municipio/municipios-list-factory";

export default (router: Router) => {
  router.get("/municipios/:uf", adminAuth, makeResetToken, adaptRoute(makeListMunicipios()));
};
