import {
  Column,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Category } from './Category.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'category_translation' })
@Unique('category_translation_unique_translation', [
  'translatable_id',
  'locale',
])
@Index('IDX_3F207042C2AC5D3', ['translatable_id'])
export class CategoryTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('text')
  description: string;

  @ManyToOne(() => Category, (category) => category.category_translation, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
    cascade: true,
    nullable: true,
  })
  category: Category;
}
