import { AbstractRepository, EntityRepository } from "typeorm";
import { CategoryRepository } from "../data/protocols/CategoryRepository";
import { Category } from "../models/Category";

@EntityRepository(Category)
export class CategoryPostgresRepository
  extends AbstractRepository<Category>
  implements CategoryRepository {
  async add(category: Category): Promise<Category> {
    const userAdd = await this.repository.save(category);
    return userAdd;
  }

  async edit(id: number, category: Partial<Category>): Promise<Category> {
    const userEdited = await this.repository.save({ id: id, ...category });
    return userEdited;
  }

  async findById(id: number): Promise<Category> {
    return await this.repository.findOneOrFail(id);
  }

  async findAll(): Promise<Category[]> {
    return await this.repository.find({ order: { id: `DESC` } });
  }

  async findForPage(parent: number | null = null, limit = 10): Promise<Category[]> {
    if (limit < 0) return []
    const categories = await this.repository.find({ where: { category: parent }, relations: ['children', 'category'], order: { id: 'DESC' } })
    await Promise.all(categories.map(async (category) => {
      category.children = await this.findForPage(category.id, limit - 1)
    }))
    return categories
  }

  create(category: Partial<Category>): Category {
    return this.repository.create(category);
  }
}
