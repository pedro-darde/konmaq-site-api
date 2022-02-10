import { AbstractRepository, EntityRepository } from "typeorm";
import { ProductRepository } from "../data/protocols/ProductRepository";
import { Product } from "../models/Product";

@EntityRepository(Product)
export class ProductPostgresRepository
  extends AbstractRepository<Product>
  implements ProductRepository
{
  async add(product: Product): Promise<Product> {
    const productAdd = await this.repository.save(product);
    return productAdd;
  }

  async edit(id: number, product: Partial<Product>): Promise<Product> {
    const productEdited = await this.repository.save({ id: id, ...product });
    return productEdited;
  }

  async findById(id: number): Promise<Product> {
    return await this.repository.findOneOrFail(id);
  }

  async findAll(): Promise<Product[]> {
    return this.repository.find({ order: { id: `DESC` } });
  }

  create(product: Partial<Product>): Product {
    return this.repository.create(product);
  }
}
