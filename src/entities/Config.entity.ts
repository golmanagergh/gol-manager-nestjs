import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'config' })
export class Config extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  time_for_free: number;

  @Column('varchar', { length: 10 })
  version: string;

  @Column('boolean', { nullable: false, default: true })
  enable_ios: boolean;

  @Column('boolean', { nullable: false, default: true })
  enable_android: boolean;
}
