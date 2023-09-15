import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './Category.entity';
import { Customer } from './Customer.entity';
import { ExerciseCalendar } from './ExerciseCalendar.entity';
import { ExerciseMaterial } from './ExerciseMaterial.entity';
import { ExerciseQualification } from './ExerciseQualification.entity';
import { ExerciseTranslation } from './ExerciseTranslation.entity';
import { NoteExercise } from './NoteExercise.entity';

@Entity({ name: 'exercise' })
// @Index('IDX_AEDAD51C12469DE2', ['category_id'])
@Index('FK_AEDAD51C12469DE2', ['category_id'])
@Index('FK_excercise_cuatomer_id', ['customer_id'])
export class Exercise extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  category_id: number;

  @Column('int', { nullable: true })
  customer_id: number;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  @Column('varchar', { length: 255, nullable: true })
  poster: string;

  @Column('varchar', { length: 255, nullable: true })
  dificulty: string;

  @Column('varchar', { length: 255, nullable: true })
  intensity: string;

  @Column('int', { nullable: true })
  duration: number;

  @Column('int', { nullable: true })
  is_shared: number;

  @DeleteDateColumn({ type: 'datetime', nullable: true, precision: 0 })
  deleted_at: Date;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  // Relationships
  @ManyToOne(() => Category, (category) => category.exercise, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Customer, (customer) => customer.exercise, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(
    () => ExerciseCalendar,
    (exercise_calendar) => exercise_calendar.exercise,
  )
  exercise_calendar: ExerciseCalendar[];

  @OneToMany(
    () => ExerciseMaterial,
    (exercise_material) => exercise_material.exercise,
  )
  exercise_material: ExerciseMaterial[];

  @OneToMany(
    () => ExerciseQualification,
    (exercise_qualification) => exercise_qualification.exercise,
  )
  exercise_qualification: ExerciseQualification[];

  @OneToMany(
    () => ExerciseTranslation,
    (exercise_translation) => exercise_translation.exercise,
  )
  exercise_translation: ExerciseTranslation[];

  @OneToMany(() => NoteExercise, (note_exercise) => note_exercise.exercise)
  note_exercise: NoteExercise[];

  // Indexes
}
