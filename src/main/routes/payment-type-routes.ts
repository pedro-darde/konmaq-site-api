import { Router } from "express";
import { AddPaymentTypeController } from "../../controllers/PaymentType/AddPaymentTypeController";
import { DbPaymentType } from "../../data/usecase/DbPaymentType";
import { adaptRoute } from "../adapters/router-adapter";
import { adminAuth } from "../factories/middlewares/admin-auth";


const makeAddPaymentTypeController = () => {
    const dbPaymentType = new DbPaymentType()
    const addPaymentTypeController = new AddPaymentTypeController(dbPaymentType)
    return addPaymentTypeController
}

export default (route: Router) => {
    route.post('/payment-type', adminAuth, adaptRoute(makeAddPaymentTypeController()))
}