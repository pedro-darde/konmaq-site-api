import { Supplier } from "../models/Supplier";

export interface DbSupplierImpl {
  add: (supplier: DbAddSupplier) => Promise<Supplier>;
  edit: (id: number, supplier: DbEditSupplier) => Promise<Supplier>;
  findById: (id: number) => Promise<Supplier>;
  findAll: () => Promise<Supplier[]>;
  create: (supplier: Partial<Supplier>) => Supplier;
}

export type DbAddSupplier = Supplier;
export type DbEditSupplier = Partial<Supplier>;
