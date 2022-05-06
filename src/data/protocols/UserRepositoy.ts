import { User } from "../../models/User";

export interface UserRepository {
  add: (user: User) => Promise<User>;
  edit: (id: number, user: Partial<User>) => Promise<User>;
  findById: (id: number) => Promise<User>;
  findAll: () => Promise<User[]>;
  create: (user: Partial<User>) => User;
  findByEmail: (email: string) => Promise<User | undefined>
  findByToken: (token: string, role?: string) => Promise<User | undefined>
  updateAccessToken: (id: number, token: string) => Promise<void>
}
