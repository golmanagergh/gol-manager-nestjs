import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Exercise } from './Exercise.entity';
import { ExerciseUser } from './ExerciseUser.entity';
import { Season } from './Season.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'exercise_calendar' })
export class ExerciseCalendar extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  season_id: number;

  @Column('int', { nullable: true })
  exercise_id: number;

  @Column({ type: 'date' })
  date: Date;

  @Column('int', { nullable: true })
  exercise_user_id: number;

  @Column('int', { default: 1 })
  type_exercise: number;

  // Relationships
  @ManyToOne(() => Season, (season) => season.exercise_calendar, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @ManyToOne(
    () => ExerciseUser,
    (exercise_user) => exercise_user.exercise_calendar,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'exercise_user_id' })
  exercise_user: ExerciseUser;

  @ManyToOne(() => Exercise, (exercise) => exercise.exercise_calendar, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;
}
