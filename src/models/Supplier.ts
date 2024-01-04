import { IsEmail, IsEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity("suppliers")
export class Supplier {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  @IsEmail({}, { message: "O email informado não é válido" })
  email: string;

  @Column({ type: "varchar" })
  phone_number: string;

  @Column({ type: "varchar" })
  description?: string;

  @Column({ type: "varchar" })
  neighboor: string;

  @Column({ type: `integer` })
  country: number;

  @Column({ type: "varchar" })
  city: number;

  @Column({ type: "varchar" })
  city_name: string;

  @Column({ type: "varchar" })
  street_name: string;

  @Column({ type: "varchar" })
  street_number: string;

  @Column({ type: `varchar` })
  additional?: string;

  @OneToMany(() => Product, (product) => product.supplier)
  products: Product[];
}
