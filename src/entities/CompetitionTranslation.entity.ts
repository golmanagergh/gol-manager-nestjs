import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Competition } from './Competition.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'competition_translation' })
@Unique('competition_translation_unique_translation', [
  'translatable_id',
  'locale',
])
export class CompetitionTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  name: string;

  @Column('longtext', { nullable: true })
  description: string;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('int')
  translatable_id: number;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @ManyToOne(
    () => Competition,
    (competition) => competition.competition_translation,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  competition: Competition;
}
