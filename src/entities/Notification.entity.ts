import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';
import { NotificationReads } from './NotificationReads.entity';
import { NotificationRemoves } from './NotificationRemoves.entity';
import { NotificationTranslation } from './NotificationTranslation.entity';
import { TypeNotifications } from './TypeNotifications.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'notification' })
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  customer_id: number;

  @Column('int', { default: 1 })
  type_notification_id: number;

  @Column('json', { nullable: true })
  data: any;

  @CreateDateColumn({
    nullable: true,
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

  @Column('boolean', { default: true })
  is_active: boolean;

  // Relationships
  @ManyToOne(
    () => TypeNotifications,
    (type_notifications) => type_notifications.notification,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'type_notification_id' })
  type_notifications: TypeNotifications;

  @ManyToOne(() => Customer, (customer) => customer.notification, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(
    () => NotificationReads,
    (notification_reads) => notification_reads.notification,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  notification_reads: NotificationReads[];

  @OneToMany(
    () => NotificationRemoves,
    (notification_removes) => notification_removes.notification,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  notification_removes: NotificationRemoves[];

  @OneToMany(
    () => NotificationTranslation,
    (notification_translation) => notification_translation.notification,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  notification_translation: NotificationTranslation[];
}
