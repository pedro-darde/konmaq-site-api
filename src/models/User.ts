import { IsEmail, IsEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UniqueValidator } from "../validation/UniqueConstraintValidation";
import { UserAddress } from "./UserAddress";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id?: number;

  @Column({ type: "varchar" })
  name_social_name: string;

  @Column({ type: "varchar" })
  @UniqueValidator(User, {
    message: "Já existe um usuário cadastrado com este documento",
  })
  document: string;

  @Column({ type: "varchar" })
  insc_estadual: string;

  @Column({ type: "boolean" })
  isento: boolean;

  @Column({ type: "varchar" })
  @IsEmail({}, { message: "O email informado não é válido" })
  email: string;

  @Column({ type: "varchar" })
  phone_number: string;

  @Column({ type: "integer" })
  country: number;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  token?: string;

  @Column({ type: "varchar" })
  type: string;

  @Column({ type: "boolean", default: true })
  active?: boolean;

  @OneToMany(() => UserAddress, (userAdress) => userAdress.user, {
    cascade: true,
    eager: true,
  })
  addresses: UserAddress[];
}
