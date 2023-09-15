import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';

@Entity({ name: 'suggestion' })
export class Suggestion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  customer_id: number;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  @Column('longtext')
  value: string;

  // Relationships
  @ManyToOne(() => Customer, (customer) => customer.suggestion, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
