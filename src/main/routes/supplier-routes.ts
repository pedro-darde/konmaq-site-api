import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { adminAuth } from "../factories/middlewares/admin-auth";
import { makeResetToken } from "../factories/middlewares/reset-token";
import { makeAddSupplierFactory } from "../factories/supplier/add-supplier-factory";
import { makeEditSupplierFactory } from "../factories/supplier/edit-supplier-factory";
import { makeListSupplierFactory } from "../factories/supplier/list-supplier-factory";
import { makeShowSupplierFactory } from "../factories/supplier/show-user-factory";

export default (router: Router) => {
  router.post("/supplier", adminAuth, makeResetToken, adaptRoute(makeAddSupplierFactory()));
  router.get("/supplier", adminAuth, makeResetToken, adaptRoute(makeListSupplierFactory()));
  router.get("/supplier/:id", adminAuth, makeResetToken, adaptRoute(makeShowSupplierFactory()));
  router.patch("/supplier/:id", adminAuth, makeResetToken, adaptRoute(makeEditSupplierFactory()));
};
