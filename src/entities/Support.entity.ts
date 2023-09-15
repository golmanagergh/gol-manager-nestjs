import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AppModuleEntity } from './AppModule.entity';
import { Customer } from './Customer.entity';
import { SupportFile } from './SupportFile.entity';

@Entity({ name: 'support' })
export class Support extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('int')
  customer_id: number;

  @Column('varchar', { length: 100 })
  version_app: string;

  @Column('varchar', { length: 100 })
  device: string;

  @Column('int')
  app_module_id: number;

  @Column('boolean', { default: false })
  is_resolved: boolean;

  @CreateDateColumn({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    type: 'timestamp',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @ManyToOne(() => Customer, (customer) => customer.support, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => AppModuleEntity, (app_module) => app_module.support, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'app_module_id' })
  app_module: AppModuleEntity;

  @OneToMany(() => SupportFile, (support_file) => support_file.support, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  support_file: SupportFile[];
}
