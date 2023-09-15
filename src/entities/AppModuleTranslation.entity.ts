import {
  Column,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { AppModuleEntity } from './AppModule.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'app_module_translation' })
@Unique('app_module_translation_unique_translation', [
  'translatable_id',
  'locale',
])
@Index('IDX_3F207042C2AC5D3', ['translatable_id'])
export class AppModuleTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 5 })
  locale: string;

  @ManyToOne(
    () => AppModuleEntity,
    (app_module) => app_module.app_module_translation,
    {
      onDelete: 'CASCADE',
      onUpdate: 'NO ACTION',
      cascade: true,
      nullable: true,
    },
  )
  app_module: AppModuleEntity;
}
