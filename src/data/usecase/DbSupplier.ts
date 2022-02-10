import { getCustomRepository } from "typeorm";
import { DbSupplierImpl } from "../../domain/db-supplier";
import { Supplier } from "../../models/Supplier";
import { SupplierPostgresRepository } from "../../repositories/SupplierPostgresRepository";
export class DbSupplier implements DbSupplierImpl {
  async add(supplier: Supplier): Promise<Supplier> {
    const repo = getCustomRepository(SupplierPostgresRepository);
    const newSupplier = await repo.add(supplier);
    return newSupplier;
  }
  async edit(id: number, supplier: Partial<Supplier>): Promise<Supplier> {
    const repo = getCustomRepository(SupplierPostgresRepository);
    const supplierEdited = await repo.edit(id, supplier);
    return supplierEdited;
  }

  async findById(id: number): Promise<Supplier> {
    const repo = getCustomRepository(SupplierPostgresRepository);
    return await repo.findById(id);
  }

  async findAll(): Promise<Supplier[]> {
    const repo = getCustomRepository(SupplierPostgresRepository);
    return await repo.findAll();
  }

  create(Supplier: Partial<Supplier>): Supplier {
    const repo = getCustomRepository(SupplierPostgresRepository);
    return repo.create(Supplier);
  }
}
