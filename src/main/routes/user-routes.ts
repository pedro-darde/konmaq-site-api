import { Router } from "express";
import { adaptRoute } from "../adapters/router-adapter";
import { adminAuth } from "../factories/middlewares/admin-auth";
import { makeResetToken } from "../factories/middlewares/reset-token";
import { makeAddUserFactory } from "../factories/user/add-user-factory";
import { makeEditUserFactory } from "../factories/user/edit-user-factory";
import { makeListUserFactory } from "../factories/user/list-user-factory";
import { makeShowUserFactory } from "../factories/user/show-user-factory";

export default (router: Router) => {
  router.post("/user", adaptRoute(makeAddUserFactory()));
  router.get("/user/:id", adaptRoute(makeShowUserFactory()));
  router.patch("/user/:id", adaptRoute(makeEditUserFactory()));

  router.get("/user", adminAuth, makeResetToken, adaptRoute(makeListUserFactory()));
};
