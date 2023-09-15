import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { NotificationAutomaticMessage } from './NotificationAutomaticMessage.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'notification_automatic_translation' })
export class NotificationAutomaticTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  title: string;

  @Column('varchar', { length: 255, nullable: true })
  plural_message: string;

  @Column('varchar', { length: 255, nullable: true })
  singular_message: string;

  @Column('varchar', { length: 50, nullable: true })
  locale: string;

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
  @ManyToOne(
    () => NotificationAutomaticMessage,
    (notification_automatic_message) =>
      notification_automatic_message.notification_automatic_translation,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'notification_automatic_message_id' })
  notification_automatic_message: NotificationAutomaticMessage;
}

// Continue with the remaining entities...
