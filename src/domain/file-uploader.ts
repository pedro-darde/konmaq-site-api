import { ProductFile } from "../models/ProductFile";

export interface FileFormatter {
    formatFile: (file: ProductFile[]) => Promise<string[]>
}