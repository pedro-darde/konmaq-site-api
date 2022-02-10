import { getCustomRepository } from "typeorm";
import { DbProductImpl } from "../../domain/db-product";
import { Product } from "../../models/Product";
import { ProductPostgresRepository } from "../../repositories/ProductPostgresRepository";
export class DbProduct implements DbProductImpl {
  async add(product: Product): Promise<Product> {
    const repo = getCustomRepository(ProductPostgresRepository);
    const newProduct = await repo.add(product);
    return newProduct;
  }
  async edit(id: number, product: Partial<Product>): Promise<Product> {
    const repo = getCustomRepository(ProductPostgresRepository);
    const ProductEdited = await repo.edit(id, product);
    return ProductEdited;
  }

  async findById(id: number): Promise<Product> {
    const repo = getCustomRepository(ProductPostgresRepository);
    return await repo.findById(id);
  }

  async findAll(): Promise<Product[]> {
    const repo = getCustomRepository(ProductPostgresRepository);
    return await repo.findAll();
  }

  create(Product: Partial<Product>): Product {
    const repo = getCustomRepository(ProductPostgresRepository);
    return repo.create(Product);
  }
}
