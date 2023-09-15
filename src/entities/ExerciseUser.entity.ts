import {
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ExerciseCalendar } from './ExerciseCalendar.entity';
import { ExerciseUserMaterial } from './ExerciseUserMaterial.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'exercise_user' })
export class ExerciseUser extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  title: string;

  @Column('varchar', { length: 255 })
  description: string;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  @Column('varchar', { length: 255, nullable: true })
  difficulty: string;

  @Column('varchar', { length: 255, nullable: true })
  intensity: string;

  @Column('varchar', { length: 255 })
  user_id: string;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  @Column('int', { default: 0 })
  duration: number;

  // Relationships
  @OneToMany(
    () => ExerciseCalendar,
    (exercise_calendar) => exercise_calendar.exercise_user,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  exercise_calendar: ExerciseCalendar[];

  @OneToMany(
    () => ExerciseUserMaterial,
    (exercise_user_material) => exercise_user_material.exercise_user,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  exercise_user_material: ExerciseUserMaterial[];
}
