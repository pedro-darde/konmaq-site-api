import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
} from "typeorm";
import { ProductCategory } from "./ProductCategory";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @ManyToOne(() => Category, (cat) => cat.children)
  @JoinColumn({ name: "parent_id" })
  category: Category;

  @OneToMany(() => Category, (child) => child.category)
  children: Category[];

  @OneToMany(() => ProductCategory, (prodCat) => prodCat.category)
  productCategory: ProductCategory[];

  @Column({ type: `boolean`, default: true })
  active: boolean;
}
