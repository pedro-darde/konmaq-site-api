import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("municipios")
export class Municipio {
  @PrimaryColumn({  })
  cod_municipio: number;

  @Column()
  nome: string;

  @Column()
  cod_estado: number;
}
