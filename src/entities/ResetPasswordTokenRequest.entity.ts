import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './Customer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'reset_password_token_request' })
export class ResetPasswordTokenRequest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  customer_id: number;

  @Column('varchar', { length: 6 })
  token: string;

  @Column('varchar', { length: 100 })
  hashed_token: string;

  @Column('int', { default: 0 })
  state: number;

  @Column('datetime', { precision: 0 })
  requested_at: Date;

  @Column('datetime', { precision: 0 })
  expires_at: Date;

  // Relationships
  @ManyToOne(
    () => Customer,
    (customer) => customer.reset_password_token_request,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
