import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("user_address")
export class UserAddress {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "integer" })
  city: number;

  @Column({ type: "varchar" })
  city_name: string;

  @Column({ type: "varchar" })
  street_name: string;

  @Column({ type: "varchar" })
  street_number: string;

  @Column({ type: "varchar" })
  additional: string;

  @Column({ type: "varchar" })
  cep: string;

  @Column()
  country: number;

  @Column({ type: "varchar" })
  neighboor: string;

  @ManyToOne(() => User, (user) => user.addresses)
  @JoinColumn({ name: "user_id" })
  user: User;
}
