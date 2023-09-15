import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { CouponCustomer } from './CouponCustomer.entity';

@Entity({ name: 'coupon' })
@Unique('promo_code', ['promo_code'])
export class Coupon extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('boolean', { default: false })
  is_generated_promo_code: boolean;

  @Column('varchar', { length: 10 })
  promo_code: string;

  @Column('datetime', { precision: 0 })
  expires_at: Date;

  @Column('int')
  limit_uses: number;

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
  @OneToMany(() => CouponCustomer, (coupon_customer) => coupon_customer.coupon)
  @JoinColumn({ referencedColumnName: 'id' })
  coupon_customer: CouponCustomer[];
}
