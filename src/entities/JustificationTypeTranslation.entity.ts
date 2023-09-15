import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { JustificationType } from './JustificationType.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'justification_type_translation' })
export class JustificationTypeTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('varchar', { length: 255 })
  description: string;

  // Relationships
  @ManyToOne(
    () => JustificationType,
    (justification_type) => justification_type.justification_type_translation,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'translatable_id' })
  justification_type: JustificationType;
}
