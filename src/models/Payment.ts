import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PaymentType } from "./PaymentType";

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "timestamp"})
  created_at: string;

  @Column({ type: "date" })
  due_date: Date;

  @ManyToOne(() => PaymentType)
  @JoinColumn({ name: "payment_type_id" })
  paymentType: PaymentType;

  @Column({ type: "varchar" })
  transport: string;

  @Column({ type: "boolean", default: true })
  active: boolean;
}
