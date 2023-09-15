import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Difficulty } from './Difficulty.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'difficulty_translation' })
@Unique('difficulty_translation_unique_translation', [
  'translatable_id',
  'locale',
])
export class DifficultyTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 5 })
  locale: string;

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

  // Relationships
  @ManyToOne(
    () => Difficulty,
    (difficulty) => difficulty.difficulty_translation,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'translatable_id' })
  difficulty: Difficulty;
}
