import { AbstractRepository, EntityRepository } from "typeorm";
import { UserRepository } from "../data/protocols/UserRepositoy";
import { User } from "../models/User";

@EntityRepository(User)
export class UserPostgresRepository
  extends AbstractRepository<User>
  implements UserRepository {
  async add(user: User): Promise<User> {
    const userAdd = await this.repository.save(user);
    return userAdd;
  }

  async edit(id: number, user: Partial<User>): Promise<User> {
    const userEdited = await this.repository.save({ id: id, ...user });
    return userEdited;
  }

  async findById(id: number): Promise<User> {
    return await this.repository.findOneOrFail(id);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find({ order: { id: `DESC` } });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.repository.findOne({ where: { email } })
  };

  create(user: Partial<User>): User {
    return this.repository.create(user);
  }
}
