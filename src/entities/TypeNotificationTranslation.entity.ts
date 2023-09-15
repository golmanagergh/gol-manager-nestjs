import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeNotifications } from './TypeNotifications.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'type_notification_translation' })
export class TypeNotificationTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('text', { nullable: true })
  description: string;

  // Relationships
  @ManyToOne(
    () => TypeNotifications,
    (type_notifications) => type_notifications.type_notification_translation,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'translatable_id' })
  type_notifications: TypeNotifications;
}
