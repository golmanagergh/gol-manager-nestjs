import {
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Exercise } from './Exercise.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'exercise_translation' })
@Unique('exercise_translation_unique_translation', [
  'translatable_id',
  'locale',
])
export class ExerciseTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('longtext')
  description: string;

  // Relationships
  @ManyToOne(() => Exercise, (exercise) => exercise.exercise_translation, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'translatable_id' })
  exercise: Exercise;
}
