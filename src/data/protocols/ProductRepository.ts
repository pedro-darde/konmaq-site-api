import { Product } from "../../models/Product";
import { IRepository } from "./IRepository";

export type CustomProductFind = Omit<Product, "supplier" | "categories"> & {
  supplier: number;
  categories: number[];
};

export interface ProductRepository
  extends Omit<IRepository<Product>, "findById"> {
  findAllToHomePage: () => Promise<{ releases: Product[]; popular: Product[] }>;
  findById: (id: number) => Promise<CustomProductFind>;
  findByIds: (ids: number[]) => Promise<Product[]>;
  startTranscation: () => Promise<void>;
  commit: () => Promise<void>;
  rollback: () => Promise<void>;
  release: () => Promise<void>;
}
