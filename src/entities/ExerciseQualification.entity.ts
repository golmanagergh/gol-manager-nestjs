import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './Customer.entity';
import { Exercise } from './Exercise.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'exercise_qualification' })
export class ExerciseQualification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  exercise_id: number;

  @Column('int')
  customer_id: number;

  @Column('int')
  quantity: number;

  // Relationships
  @ManyToOne(() => Exercise, (exercise) => exercise.exercise_qualification, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;

  @ManyToOne(() => Customer, (customer) => customer.exercise_qualification, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
