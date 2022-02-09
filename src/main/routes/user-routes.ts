import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { makeAddUserFactory } from "../factories/user/add-user-factory";
import { makeEditUserFactory } from "../factories/user/edit-user-factory";
import { makeListUserFactory } from "../factories/user/list-user-factory";
import { makeShowUserFactory } from "../factories/user/show-user-factory";

export default (router: Router) => {
  //create user
  router.post("/user", adaptRoute(makeAddUserFactory()));
  router.get("/user", adaptRoute(makeListUserFactory()));
  router.get("/user/:id", adaptRoute(makeShowUserFactory()));
  router.patch("/user/:id", adaptRoute(makeEditUserFactory()));
};
