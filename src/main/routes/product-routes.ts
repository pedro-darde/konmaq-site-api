import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { makeAddProductFactory } from "../factories/product/add-product-factory";
import { makeEditProductFactory } from "../factories/product/edit-product-factory";
import { makeListProductFactory } from "../factories/product/list-product-factory";
import { makeShowProductFactory } from "../factories/product/show-user-factory";

export default (router: Router) => {
  //create user
  router.post("/product", adaptRoute(makeAddProductFactory()));
  router.get("/product", adaptRoute(makeListProductFactory()));
  router.get("/product/:id", adaptRoute(makeShowProductFactory()));
  router.patch("/product/:id", adaptRoute(makeEditProductFactory()));
};
