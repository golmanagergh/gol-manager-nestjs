import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { NotificationAutomatic } from './NotificationAutomatic.entity';
import { NotificationAutomaticTranslation } from './NotificationAutomaticTranslation.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'notification_automatic_message' })
export class NotificationAutomaticMessage extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  plural_message: string;

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

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  @Column('int', { default: 0, nullable: true })
  type: number;

  @Column('varchar', { length: 255, nullable: true })
  title: string;

  @Column('varchar', { length: 255, nullable: true })
  singular_message: string;

  // Relationships
  @OneToMany(
    () => NotificationAutomatic,
    (notification_automatic) =>
      notification_automatic.notification_automatic_message,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  notification_automatic: NotificationAutomatic[];

  @OneToMany(
    () => NotificationAutomaticTranslation,
    (notification_automatic_translation) =>
      notification_automatic_translation.notification_automatic_message,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  notification_automatic_translation: NotificationAutomaticTranslation[];
}
