import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProductCategory } from "./ProductCategory";
import { ProductFile } from "./ProductFile";
import { Supplier } from "./Supplier";

import { IsNotEmpty, IsNumber } from "class-validator";
import { ExistOnDatabaseValidator } from "../validation/ExistsOnDatabaseConstraintValidator";
import { Category } from "./Category";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  @IsNotEmpty({ message: "Informe um título." })
  title: string;

  @Column({ type: "float" })
  @IsNumber({}, { message: "O preço deve ser um número." })
  @IsNotEmpty({ message: "Informe um preço." })
  price: number;

  @Column({ type: "float", default: 0.0 })
  promotion: number;

  @Column({ type: "float", default: 0.0 })
  discount: number;

  @Column({ type: "varchar" })
  @IsNotEmpty({ message: "Informe uma descrição." })
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
  @IsNotEmpty({ message: "Por favor informe o peso." })
  weight: number;

  @Column({ type: "float" })
  @IsNotEmpty({ message: "Por favor informe o tamanho." })
  length: number;

  @Column({ type: "float" })
  @IsNotEmpty({ message: "Por favor informe a altura." })
  height: number;

  @Column({ type: "float" })
  @IsNotEmpty({ message: "Por favor informe a largura." })
  width: number;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @OneToMany(() => ProductCategory, (category) => category.product)
  @IsNotEmpty({ message: "Você deve informar ao menos uma categoria" })
  categories: ProductCategory[];

  @OneToMany(() => ProductFile, (file) => file.product)
  files: ProductFile[];
}
