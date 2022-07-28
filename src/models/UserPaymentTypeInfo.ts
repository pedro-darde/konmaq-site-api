import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PaymentType } from "./PaymentType";
import { User } from "./User";

@Entity("user_payment_type_info")
export class UserPaymentTypeInfo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "json" })
  info: Object;

  @Column({ type: "boolean" })
  main: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(() => PaymentType)
  @JoinColumn({ name: "payment_type_id" })
  paymentType: PaymentType;
}
