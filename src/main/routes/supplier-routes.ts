import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { makeAddSupplierFactory } from "../factories/supplier/add-supplier-factory";
import { makeEditSupplierFactory } from "../factories/supplier/edit-supplier-factory";
import { makeListSupplierFactory } from "../factories/supplier/list-supplier-factory";
import { makeShowSupplierFactory } from "../factories/supplier/show-user-factory";

export default (router: Router) => {
  //create user
  router.post("/supplier", adaptRoute(makeAddSupplierFactory()));
  router.get("/supplier", adaptRoute(makeListSupplierFactory()));
  router.get("/supplier/:id", adaptRoute(makeShowSupplierFactory()));
  router.patch("/supplier/:id", adaptRoute(makeEditSupplierFactory()));
};
