import { FileFormatter } from "../domain/file-uploader";
import { ProductFile } from "../models/ProductFile";

export class SharpFileFormatter implements FileFormatter {

    async formatFile(files: ProductFile[]): Promise<string[]> {
        return ['123', '321']
    };
}