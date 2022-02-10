import { Product } from "../../models/Product";
import { IRepository } from "./IRepository";

export interface ProductRepository extends IRepository<Product> {}