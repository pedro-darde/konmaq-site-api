import {
  AbstractRepository,
  EntityRepository,
  getConnection,
  getCustomRepository,
  In,
} from "typeorm";
import {
  CustomProductFind,
  ProductRepository,
} from "../data/protocols/ProductRepository";
import { Product } from "../models/Product";
import { ProductCategoryPostgresRepository } from "./ProductCategoryPostgresRepository";

@EntityRepository(Product)
export class ProductPostgresRepository
  extends AbstractRepository<Product>
  implements ProductRepository {
  async add(product: Product): Promise<Product> {
    const productAdd = await this.repository.save(product);
    return productAdd;
  }

  async edit(id: number, product: Partial<Product>): Promise<Product> {
    const productEdited = await this.repository.save({ id: id, ...product });
    return productEdited;
  }

  async findById(id: number): Promise<CustomProductFind> {
    const repoPandC = getCustomRepository(ProductCategoryPostgresRepository);
    const PandC = await repoPandC.findCategoriesForProduct(id);

    const product = await this.repository.findOneOrFail(id, {
      relations: ["files", "supplier"],
    });

    return {
      ...product,
      categories: PandC.map((pc) => pc.category.id),
      supplier: product.supplier.id,
    };
  }

  async findByIds(ids: number[]): Promise<Product[]> {
    return await this.repository.find({
      where: { id: In(ids) },
      relations: ["files"]
    })
  };

  async findAll(): Promise<Product[]> {
    return this.repository.find({
      order: { id: `DESC` },
      relations: ["files"],
    });
  }

  async findAllToHomePage(): Promise<{
    releases: Product[];
    popular: Product[];
  }> {
    const releases = await this.repository.find({
      order: { created_at: "DESC" },
      take: 5,
      relations: ["files"],
    });

    //TODO fazer a query que vai trazer os popular (trazer os que mais sao vendidos)
    const popular = await this.repository.find({
      take: 3,
      relations: ["files"],
    });

    return { releases, popular };
  }

  async startTranscation(): Promise<void> {
    const queryRunner = getConnection().createQueryRunner();
    await queryRunner.startTransaction();
  }

  async rollback() {
    const queryRunner = getConnection().createQueryRunner();
    await queryRunner.rollbackTransaction();
  }

  async commit() {
    const queryRunner = getConnection().createQueryRunner();
    await queryRunner.commitTransaction();
  }

  async release(): Promise<void> {
    const queryRunner = getConnection().createQueryRunner();
    await queryRunner.release();
  }

  create(product: Partial<Product>): Product {
    return this.repository.create(product);
  }
}
