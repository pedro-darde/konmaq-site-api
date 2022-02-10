import { ProductFile } from "../../models/ProductFile";
import { IRepository } from "./IRepository";

export interface ProductFileRepository extends Omit<IRepository<ProductFile>, 'edit' | 'findById' | 'findAll' | 'add'> {
    add: (files: ProductFile[]) => Promise<ProductFile[]>
}