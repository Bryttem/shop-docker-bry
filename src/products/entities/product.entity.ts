import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column({ type: 'text', unique: true})
    name: string;

    @Column({type: 'text'})
    description?:string

    @Column({type: 'numeric'})
    price?:number


    @Column({type: 'numeric', default: 0})
    stock?:number

}
