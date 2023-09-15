import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Notification } from './Notification.entity';
import { NotificationAutomatic } from './NotificationAutomatic.entity';
import { TypeNotificationTranslation } from './TypeNotificationTranslation.entity';

@Entity({ name: 'type_notifications' })
export class TypeNotifications extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  description: string;

  @Column('varchar', { nullable: true })
  image: string;

  @CreateDateColumn({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    type: 'timestamp',
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

  // Relationships
  @OneToMany(
    () => Notification,
    (notification) => notification.type_notifications,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  notification: Notification[];

  @OneToMany(
    () => NotificationAutomatic,
    (notification_automatic) => notification_automatic.type_notifications,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  notification_automatic: NotificationAutomatic[];

  @OneToMany(
    () => TypeNotificationTranslation,
    (type_notification_translation) =>
      type_notification_translation.type_notifications,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  type_notification_translation: TypeNotificationTranslation[];
}
