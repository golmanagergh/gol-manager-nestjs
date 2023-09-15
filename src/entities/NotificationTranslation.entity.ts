import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Notification } from './Notification.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'notification_translation' })
export class NotificationTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('varchar', { length: 255, default: '' })
  title: string;

  @Column('text', { nullable: true })
  body: string;

  // Relationships
  @ManyToOne(
    () => Notification,
    (notification) => notification.notification_translation,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'translatable_id' })
  notification: Notification;
}
