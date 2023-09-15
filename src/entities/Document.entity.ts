import {
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'document' })
export class Document extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  customer_id: number;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  // Relationships
  @ManyToOne(() => Customer, (customer) => customer.document, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
