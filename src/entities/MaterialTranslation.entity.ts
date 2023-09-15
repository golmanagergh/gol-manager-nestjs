import {
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Material } from './Material.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'material_translation' })
@Unique('material_translation_unique_translation', [
  'translatable_id',
  'locale',
])
export class MaterialTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('varchar', { length: 255 })
  name: string;

  @ManyToOne(() => Material, (material) => material.material_translation, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'translatable_id' })
  material: Material;
}
