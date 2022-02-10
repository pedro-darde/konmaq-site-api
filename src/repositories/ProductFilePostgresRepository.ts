import { AbstractRepository, EntityRepository } from "typeorm";
import { ProductFileRepository } from "../data/protocols/ProductFileRepository";
import { ProductFile } from "../models/ProductFile";

@EntityRepository(ProductFile)
export class ProductFilePostgresRepository
    extends AbstractRepository<ProductFile>
    implements ProductFileRepository {
    async add(files: ProductFile[]): Promise<ProductFile[]> {
        const productsFilesAdded = await this.repository.save(files);
        return productsFilesAdded;
    }

    create(file: Partial<ProductFile>): ProductFile {
        return this.repository.create(file);
    }
}