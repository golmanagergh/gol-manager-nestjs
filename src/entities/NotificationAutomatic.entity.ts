import {
  Column,
  CreateDateColumn,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';
import { NotificationAutomaticMessage } from './NotificationAutomaticMessage.entity';
import { Season } from './Season.entity';
import { TypeNotifications } from './TypeNotifications.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'notification_automatic' })
@Index('FK1_notification_automatic_customer_id', ['customer_id'])
@Index('FK2_notification_automatic_notification_automatic_message', [
  'notification_automatic_message_id',
])
@Index('FK2_notification_automatic_type_notification', ['type_notification_id'])
@Index('FK_C7241S2llJD0HAM2', ['season_id'])
export class NotificationAutomatic extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  customer_id: number;

  @Column('int', { nullable: true })
  season_id: number;

  @Column('int', { default: 1 })
  type_notification_id: number;

  @Column('int', { default: 1 })
  is_active: number;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
    type: 'timestamp',
    precision: 0,
  })
  updated_at: Date;

  @Column('int', { nullable: true })
  notification_automatic_message_id: number;

  @Column('json', { nullable: true })
  attributes: any;

  // Relationships
  @ManyToOne(() => Customer, (customer) => customer.notification_automatic, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(
    () => NotificationAutomaticMessage,
    (notification_automatic_message) =>
      notification_automatic_message.notification_automatic,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'notification_automatic_message_id' })
  notification_automatic_message: NotificationAutomaticMessage;

  @ManyToOne(
    () => TypeNotifications,
    (type_notifications) => type_notifications.notification_automatic,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'type_notification_id' })
  type_notifications: TypeNotifications;

  @ManyToOne(() => Season, (season) => season.notification_automatic, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;
}

// The rest of the entities continue...
