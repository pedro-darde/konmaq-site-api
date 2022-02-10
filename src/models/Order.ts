import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "./Payment";
import { User } from "./User";

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "integer" })
  status: number;

  @Column({ type: "varchar" })
  search_code: string;

  @Column({ type: "varchar" })
  invoice_code: string;

  @Column({ type: "boolean", default: true })
  active: boolean;

  @ManyToOne(() => Payment)
  @JoinColumn({ name: "payment_id" })
  payment: Payment;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id'})
  user: User
}
