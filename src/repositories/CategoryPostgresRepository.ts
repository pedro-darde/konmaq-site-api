import { AbstractRepository, EntityRepository } from "typeorm";
import { CategoryRepository } from "../data/protocols/CategoryRepository";
import { Category } from "../models/Category";

@EntityRepository(Category)
export class CategoryPostgresRepository
  extends AbstractRepository<Category>
  implements CategoryRepository
{
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
    return this.repository.find({ order: { id: `DESC` } });
  }

  create(category: Partial<Category>): Category {
    return this.repository.create(category);
  }
}
