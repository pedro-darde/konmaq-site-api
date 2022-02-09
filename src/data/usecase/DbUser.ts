import { DbUserAccount } from "../../domain/db-account";
import { User } from "../../models/User";
import { UserRepository } from "../protocols/UserRepositoy";
import bcrypt from "bcrypt";
import { getCustomRepository } from "typeorm";
import { UserPostgresRepository } from "../../repositories/UserPostgresRepository";
export class DbUser implements DbUserAccount {
  async add(user: User): Promise<User> {
    const repo = getCustomRepository(UserPostgresRepository);
    const hashedPassword = bcrypt.hashSync(user.password, 12);
    const newAccount = await repo.add(
      Object.assign({}, user, { password: hashedPassword })
    );
    return newAccount;
  }
  async edit(id: number, user: Partial<User>): Promise<User> {
    const repo = getCustomRepository(UserPostgresRepository);
    const userEdited = await repo.edit(id, user);
    return userEdited;
  }

  async findById(id: number): Promise<User> {
    const repo = getCustomRepository(UserPostgresRepository);
    return await repo.findById(id);
  }

  async findAll(): Promise<User[]> {
    const repo = getCustomRepository(UserPostgresRepository);
    return await repo.findAll();
  }

  create(user: Partial<User>): User {
    const repo = getCustomRepository(UserPostgresRepository);
    return repo.create(user);
  }
}
