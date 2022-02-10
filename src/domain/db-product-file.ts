import { ProductFile } from "../models/ProductFile";

export interface DbProductFileImpl {
    add: (files: AddFile[]) => Promise<ProductFile[]>
    create: (file: Partial<ProductFile>) => ProductFile
}

export type AddFile = Omit<ProductFile, 'id'>