import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { makeAddCategoryFactory } from "../factories/category/add-category-factory";
import { makeEditCategoryFactory } from "../factories/category/edit-category-factory";
import { makeListCategoryFactory } from "../factories/category/list-category-factory";
import { makeShowCategoryFactory } from "../factories/category/show-user-factory";
import { adminAuth } from "../factories/middlewares/admin-auth";

export default (router: Router) => {
  router.get("/category", adaptRoute(makeListCategoryFactory()));
  router.get("/category/:id", adaptRoute(makeShowCategoryFactory()));

  router.post("/category", adminAuth, adaptRoute(makeAddCategoryFactory()));
  router.patch("/category/:id", adminAuth, adaptRoute(makeEditCategoryFactory()));
  router.put("/category/:id", adaptRoute(makeEditCategoryFactory()));
};
