import { CustomProductFind } from "../data/protocols/ProductRepository";
import { Product } from "../models/Product";

export interface DbProductImpl {
  add: (product: DbAddProduct) => Promise<Product>;
  edit: (id: number, product: DbEditProduct) => Promise<Product>;
  findById: (id: number) => Promise<CustomProductFind>;
  findAll: () => Promise<Product[]>;
  findAllToHomePage: () => Promise<{ releases: Product[]; popular: Product[] }>;
  create: (product: Partial<Product>) => Product;
  findByIds: (ids: number[]) => Promise<Product[]>
  startTranscation: () => Promise<void>;
  commit: () => Promise<void>;
  rollback: () => Promise<void>;
  release: () => Promise<void>
}

export type DbAddProduct = Product;
export type DbEditProduct = Partial<Product>;
