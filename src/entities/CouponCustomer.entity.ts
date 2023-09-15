import {
  Column,
  CreateDateColumn,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Coupon } from './Coupon.entity';
import { Customer } from './Customer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'coupon_customer' })
@Index('idx_coupon_customer_coupon_id', ['coupon_id'])
@Index('idx_coupon_customer_customer_id', ['customer_id'])
export class CouponCustomer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  coupon_id: number;

  @Column('int')
  customer_id: number;

  @CreateDateColumn({
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  // Relationships
  @ManyToOne(() => Coupon, (coupon) => coupon.coupon_customer, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'coupon_id' })
  coupon: Coupon;

  @ManyToOne(() => Customer, (customer) => customer.coupon_customer, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
