import { getCustomRepository } from "typeorm";
import { AddFile, DbProductFileImpl } from "../../domain/db-product-file";
import { FileFormatter } from "../../domain/file-uploader";
import { ProductFile } from "../../models/ProductFile";
import { ProductFilePostgresRepository } from "../../repositories/ProductFilePostgresRepository";

export class DbProductFile implements DbProductFileImpl {

    private readonly fileFormatter: FileFormatter
    constructor(fileFormatter: FileFormatter) {
        this.fileFormatter = fileFormatter
    }

    async add(files: AddFile[]): Promise<ProductFile[]> {
        const repo = getCustomRepository(ProductFilePostgresRepository)
        const filesAdded = await repo.add(files as ProductFile[])
        
        // const newPaths = await this.fileFormatter.formatFile(filesAdded)
        // await this.updatePathFiles(newPaths, filesAdded)
        
        return filesAdded
    }

    create(file: Partial<ProductFile>): ProductFile {
        const repo = getCustomRepository(ProductFilePostgresRepository)
        return repo.create(file)
    };

    async updatePathFiles(paths: string[], files: ProductFile[]) {

    }

}