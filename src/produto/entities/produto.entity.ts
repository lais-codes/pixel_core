import { IsNotEmpty, MaxLength, IsNumber, Min } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @MaxLength(100)
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @MaxLength(500)
  @Column({ length: 500, nullable: false })
  descricao: string;

  @IsNumber()
  @Min(0)
  @Column("decimal", { precision: 10, scale: 2 })
  preco: number;

  @IsNumber()
  @Min(0)
  @Column()
  estoque: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
  @JoinColumn({ name: 'categoria_id' })
  categoria: Categoria;
}
