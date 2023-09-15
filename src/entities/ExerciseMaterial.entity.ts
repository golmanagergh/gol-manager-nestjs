import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exercise } from './Exercise.entity';
import { Material } from './Material.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'exercise_material' })
export class ExerciseMaterial extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  material_id: number;

  @Column('int')
  exercise_id: number;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @ManyToOne(() => Exercise, (exercise) => exercise.exercise_material, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;

  @ManyToOne(() => Material, (material) => material.exercise_material, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'material_id' })
  material: Material;
}
