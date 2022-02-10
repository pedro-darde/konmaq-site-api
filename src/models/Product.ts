import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { ProductCategory } from "./ProductCategory";
import { ProductFile } from "./ProductFile";
import { Supplier } from "./Supplier";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "float" })
  price: number;

  @Column({ type: "float", default: 0.0 })
  promotion: number;

  @Column({ type: "float", default: 0.0 })
  discount: number;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  deadline: string;

  @Column({ type: "varchar" })
  keywords: string;

  @Column({ type: "varchar" })
  alias: string;

  @Column({ type: "timestamp", default: "CURRENT_TIMESTAMP" })
  created_at: string;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  @JoinColumn({ name: "supplier_id" })
  supplier: Supplier;

  @Column({ type: "float" })
  weight: number;

  @Column({ type: "float" })
  length: number;

  @Column({ type: "float" })
  height: number;

  @Column({ type: "float" })
  width: number;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @OneToMany(() => ProductCategory, (category) => category.product)
  categories: ProductCategory[];

  @OneToMany(() => ProductFile, (file) => file.product)
  files: ProductFile[];
}
