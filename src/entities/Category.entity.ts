import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryTranslation } from './CategoryTranslation.entity';
import { Exercise } from './Exercise.entity';

@Entity({ name: 'category' })
export class Category extends BaseEntity {
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

  @Column('boolean')
  is_visible: boolean;

  // Relationships
  @OneToMany(
    () => CategoryTranslation,
    (categoryTranslation) => categoryTranslation.category,
  )
  category_translation: CategoryTranslation[];

  @OneToMany(() => Exercise, (exercise) => exercise.category)
  @JoinColumn()
  exercise: Exercise[];
}
