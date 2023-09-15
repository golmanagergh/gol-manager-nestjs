import {
  Column,
  CreateDateColumn,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'customer_fingerprint' })
@Index('idx_customer_fingerprint_device_id', ['device_id'], { unique: true })
export class CustomerFingerprint extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  customer_id: number;

  @Column('varchar', { length: 255, nullable: true })
  device_id: string;

  @Column('varchar', { length: 255, nullable: true })
  fingerprint: string;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @ManyToOne(() => Customer, (customer) => customer.customer_fingerprint, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
