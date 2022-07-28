import { Router } from "express";
import { AddPaymentTypeController } from "../../controllers/PaymentType/AddPaymentTypeController";
import { EditPaymentTypeController } from "../../controllers/PaymentType/EditPaymentTypeController";
import { ListPaymentTypeController } from "../../controllers/PaymentType/ListPaymentTypeController";
import { ShowPaymentTypeController } from "../../controllers/PaymentType/ShowPaymentTypeController";
import { DbPaymentType } from "../../data/usecase/DbPaymentType";
import { adaptRoute } from "../adapters/router-adapter";
import { adminAuth } from "../factories/middlewares/admin-auth";

const makeAddPaymentTypeController = () => {
  const dbPaymentType = new DbPaymentType();
  const addPaymentTypeController = new AddPaymentTypeController(dbPaymentType);
  return addPaymentTypeController;
};

const makeEditPaymentTypeContrroller = () => {
  const dbPaymentType = new DbPaymentType();
  const editPaymentTypeController = new EditPaymentTypeController(
    dbPaymentType
  );
  return editPaymentTypeController;
};

const makeShowPaymentTypeController = () => {
  const dbPaymentType = new DbPaymentType();
  const showPaymentTypeController = new ShowPaymentTypeController(
    dbPaymentType
  );
  return showPaymentTypeController;
};

const makeListPaymentTypeController = () => {
  const dbPaymentType = new DbPaymentType();
  const listPaymentTypeController = new ListPaymentTypeController(
    dbPaymentType
  );
  return listPaymentTypeController;
};

export default (route: Router) => {
  route.post(
    "/payment-type",
    adminAuth,
    adaptRoute(makeAddPaymentTypeController())
  );
  route.patch(
    "/payment-type/:id",
    adminAuth,
    adaptRoute(makeEditPaymentTypeContrroller())
  );
  route.get("/payment-type/:id", adaptRoute(makeShowPaymentTypeController()));
  route.get("/payment-type", adaptRoute(makeListPaymentTypeController()));
};
