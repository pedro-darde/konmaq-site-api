import { IsEmail, IsEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UniqueValidator } from "../validation/UniqueConstraintValidation";

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

  @Column({ type: "varchar" })
  neighboor: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "boolean", default: true })
  active?: boolean;
}
