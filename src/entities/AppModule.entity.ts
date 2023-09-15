import { CreateDateColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppModuleTranslation } from './AppModuleTranslation.entity';
import { Support } from './Support.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'app_module' })
export class AppModuleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    type: 'timestamp',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @OneToMany(
    () => AppModuleTranslation,
    (appModuleTranslation) => appModuleTranslation.app_module,
  )
  app_module_translation: AppModuleTranslation[];

  @OneToMany(() => Support, (support) => support.app_module)
  support: Support[];
}
