import { Category } from "../models/Category";

export interface DbCategoryImpl {
  add: (category: DbAddCategory) => Promise<Category>;
  edit: (id: number, category: DbEditCategory) => Promise<Category>;
  findById: (id: number) => Promise<Category>;
  findAll: () => Promise<Category[]>;
  create: (category: Partial<Category>) => Category;
}

export type DbAddCategory = Category;
export type DbEditCategory = Partial<Category>;
