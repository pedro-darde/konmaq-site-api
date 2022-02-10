import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { Product } from "./Product";

@Entity("products_categories")
export class ProductCategory {
  @PrimaryGeneratedColumn(`increment`)
  id?: number;

  @ManyToOne(() => Product, (product) => product.categories)
  @JoinColumn({ name: "product_id" })
  product: Product;

  @ManyToOne(() => Category, category => category.productCategory)
  @JoinColumn({ name: 'category_id'})
  category: Category
}
