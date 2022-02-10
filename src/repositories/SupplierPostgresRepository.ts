import { AbstractRepository, EntityRepository } from "typeorm";
import { SupplierRepository } from "../data/protocols/SupplierRepository";
import { Supplier } from "../models/Supplier";

@EntityRepository(Supplier)
export class SupplierPostgresRepository
  extends AbstractRepository<Supplier>
  implements SupplierRepository
{
  async add(supplier: Supplier): Promise<Supplier> {
    const supplierAdd = await this.repository.save(supplier);
    return supplierAdd;
  }

  async edit(id: number, supplier: Partial<Supplier>): Promise<Supplier> {
    const supplierEdited = await this.repository.save({ id: id, ...supplier });
    return supplierEdited;
  }

  async findById(id: number): Promise<Supplier> {
    return await this.repository.findOneOrFail(id);
  }

  async findAll(): Promise<Supplier[]> {
    return this.repository.find({ order: { id: `DESC` } });
  }

  create(supplier: Partial<Supplier>): Supplier {
    return this.repository.create(supplier);
  }
}
