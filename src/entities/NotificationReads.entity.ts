import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';
import { Notification } from './Notification.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'notification_reads' })
export class NotificationReads extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  customer_id: number;

  @Column('int')
  notification_id: number;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @ManyToOne(() => Customer, (customer) => customer.notification_reads, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(
    () => Notification,
    (notification) => notification.notification_reads,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'notification_id' })
  notification: Notification;
}
