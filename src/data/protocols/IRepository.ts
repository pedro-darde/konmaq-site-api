export interface IRepository<T> {
  add: (entity: T) => Promise<T>;
  edit: (id: number, entity: Partial<T>) => Promise<T>;
  findById: (id: number) => Promise<T>;
  findAll: () => Promise<T[]>;
  create: (user: Partial<T>) => T;
}
