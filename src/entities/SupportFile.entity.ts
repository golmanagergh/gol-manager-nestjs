import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Support } from './Support.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'support_file' })
export class SupportFile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  file: string;

  @Column('int')
  support_id: number;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    onUpdate: 'CURRENT_TIMESTAMP(0)',
    type: 'timestamp',
    precision: 0,
  })
  updated_at: Date;

  @CreateDateColumn({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    type: 'timestamp',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @ManyToOne(() => Support, (support) => support.support_file, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'support_id' })
  support: Support;
}
