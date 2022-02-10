import { AddSupplierController } from "../../../controllers/Supplier/AddSupplierController";
import { DbSupplier } from "../../../data/usecase/DbSupplier";
import { Controller } from "../../../protocols/Controller";

export const makeAddSupplierFactory = (): Controller => {
  const dbSupplier = new DbSupplier();
  const supplierController = new AddSupplierController(dbSupplier);
  return supplierController;
};
