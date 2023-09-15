import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExerciseUser } from './ExerciseUser.entity';
import { Material } from './Material.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'exercise_user_material' })
export class ExerciseUserMaterial extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  material_id: number;

  @Column('int')
  exercise_user_id: number;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @ManyToOne(
    () => ExerciseUser,
    (exercise_user) => exercise_user.exercise_user_material,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'exercise_user_id' })
  exercise_user: ExerciseUser;

  @ManyToOne(() => Material, (material) => material.exercise_user_material, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'material_id' })
  material: Material;
}
