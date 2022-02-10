import { ListSupplierController } from "../../../controllers/Supplier/ListSupplierController";
import { DbSupplier } from "../../../data/usecase/DbSupplier";
import { Controller } from "../../../protocols/Controller";

export const makeListSupplierFactory = (): Controller => {
  const dbSupplier = new DbSupplier();
  const supplierController = new ListSupplierController(dbSupplier);
  return supplierController;
};

