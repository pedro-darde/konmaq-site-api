import { EditSupplierController } from "../../../controllers/Supplier/EditSupplierController";
import { DbSupplier } from "../../../data/usecase/DbSupplier";
import { Controller } from "../../../protocols/Controller";

export const makeEditSupplierFactory = (): Controller => {
  const dbSupplier = new DbSupplier();
  const supplierController = new EditSupplierController(dbSupplier);
  return supplierController;
};
