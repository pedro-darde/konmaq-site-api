import { getCustomRepository } from "typeorm";
import { DbCategoryImpl } from "../../domain/db-category";
import { Category } from "../../models/Category";
import { CategoryPostgresRepository } from "../../repositories/CategoryPostgresRepository";
export class DbCategory implements DbCategoryImpl {
  async add(category: Category): Promise<Category> {
    const repo = getCustomRepository(CategoryPostgresRepository);
    const newCategory = await repo.add(category);
    return newCategory;
  }
  async edit(id: number, category: Partial<Category>): Promise<Category> {
    const repo = getCustomRepository(CategoryPostgresRepository);
    const categoryEdited = await repo.edit(id, category);
    return categoryEdited;
  }

  async findById(id: number): Promise<Category> {
    const repo = getCustomRepository(CategoryPostgresRepository);
    return await repo.findById(id);
  }

  async findAll(): Promise<Category[]> {
    const repo = getCustomRepository(CategoryPostgresRepository);
    return await repo.findAll();
  }

  async findForPage(): Promise<Category[]> {
    const repo = getCustomRepository(CategoryPostgresRepository)
    return await repo.findForPage()
  }

  create(category: Partial<Category>): Category {
    const repo = getCustomRepository(CategoryPostgresRepository);
    return repo.create(category);
  }
}
