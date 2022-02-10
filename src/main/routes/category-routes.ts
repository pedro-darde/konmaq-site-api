import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { makeAddCategoryFactory } from "../factories/category/add-category-factory";
import { makeEditCategoryFactory } from "../factories/category/edit-category-factory";
import { makeListCategoryFactory } from "../factories/category/list-category-factory";
import { makeShowCategoryFactory } from "../factories/category/show-user-factory";

export default (router: Router) => {
  //create user
  router.post("/category", adaptRoute(makeAddCategoryFactory()));
  router.get("/category", adaptRoute(makeListCategoryFactory()));
  router.get("/category/:id", adaptRoute(makeShowCategoryFactory()));
  router.patch("/category/:id", adaptRoute(makeEditCategoryFactory()));
  router.put("/category/:id", adaptRoute(makeEditCategoryFactory()));
};
