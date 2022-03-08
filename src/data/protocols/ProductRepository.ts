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
}
