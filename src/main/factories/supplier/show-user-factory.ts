import { ShowSupplierController } from "../../../controllers/Supplier/ShowSupplierController";
import { DbSupplier } from "../../../data/usecase/DbSupplier";
import { Controller } from "../../../protocols/Controller";

export const makeShowSupplierFactory = (): Controller => {
  const dbSupplier = new DbSupplier();
  const supplierController = new ShowSupplierController(dbSupplier);
  return supplierController;
};
