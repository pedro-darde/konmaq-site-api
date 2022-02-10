import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_types")
export class PaymentType {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: `varchar` })
  description: string;

  @Column({ type: "boolean", default: true })
  active: boolean;
}
