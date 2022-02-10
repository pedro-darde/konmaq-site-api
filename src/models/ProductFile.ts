import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity('product_files')
export class ProductFile {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  path: string;

  @Column({ type: "varchar" })
  filename: string;

  @Column({ type: "timestamp" , default: 'CURRENT_TIMESTAMP'})
  created_at: string;

  @ManyToOne(() => Product, (prod) => prod.files)
  @JoinColumn({ name: "product_id" })
  product: Product;
 
  @Column({ type: "boolean", default: true })
  active: boolean;
}
