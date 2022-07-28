import { Router } from "express";
import { ListUserPaymentTypeController } from "../../controllers/UserPaymentTypeInfo/ListUserPaymentTypeInfoController";
import { DbUserPaymentTypeInfo } from "../../data/usecase/DbUserPaymentTypeInfo";
import { adaptRoute } from "../adapters/router-adapter";

const makeLoadByUser = () => {
  const dbUserPaymentTypeInfo = new DbUserPaymentTypeInfo();
  const listUserPaymentTypeInfo = new ListUserPaymentTypeController(
    dbUserPaymentTypeInfo
  );
  return listUserPaymentTypeInfo;
};

export default (route: Router) => {
  route.get("/user-payment-type-info/:user_id", adaptRoute(makeLoadByUser()));
};
