import { User } from "../../models/User";

export interface UserRepository {
  add: (user: User) => Promise<User>;
  edit: (id: number, user: Partial<User>) => Promise<User>;
  findById: (id: number) => Promise<User>;
  findAll: () => Promise<User[]>;
  create: (user: Partial<User>) => User;
}
