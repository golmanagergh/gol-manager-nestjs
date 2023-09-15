import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ExerciseMaterial } from './ExerciseMaterial.entity';
import { ExerciseUserMaterial } from './ExerciseUserMaterial.entity';
import { MaterialTranslation } from './MaterialTranslation.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'material' })
export class Material extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  // Relationships
  @OneToMany(
    () => ExerciseMaterial,
    (exercise_material) => exercise_material.material,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  exercise_material: ExerciseMaterial[];

  @OneToMany(
    () => ExerciseUserMaterial,
    (exercise_user_material) => exercise_user_material.material,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  exercise_user_material: ExerciseUserMaterial[];

  @OneToMany(
    () => MaterialTranslation,
    (material_translation) => material_translation.material,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  material_translation: MaterialTranslation[];
}
