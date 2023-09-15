import {
  Column,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'customer_device' })
@Index('idx_customer_device_device_id', ['device_id'], { unique: true })
export class CustomerDevice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  customer_id: number;

  @Column('int')
  refresh_token_id: number;

  @Column('varchar', { length: 255, nullable: true })
  device_id: string;

  @Column('varchar', { length: 255, nullable: true })
  device_model: string;

  @Column('varchar', { length: 255, nullable: true })
  device_type: string;

  @Column('varchar', { length: 255, nullable: true })
  device_brand: string;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  @Column('varchar', { length: 255, nullable: true })
  token: string;

  @Column('boolean', { default: true })
  status: boolean;
}
