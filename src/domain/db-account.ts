import { User } from "../models/User";

export interface DbUserAccount {
  add: (user: DbAddUser) => Promise<User>;
  edit: (id: number, user: DbEditUser) => Promise<User>;
  findById: (id: number) => Promise<User>;
  findAll: () => Promise<User[]>;
  create: (user: Partial<User>) => User;
  findByEmail: (email: string) => Promise<User | undefined>
}

export type DbAddUser = User;
export type DbEditUser = Partial<User>;
