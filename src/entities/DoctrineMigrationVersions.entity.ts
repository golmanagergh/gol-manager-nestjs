import { Column, PrimaryColumn } from 'typeorm';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'doctrine_migration_versions' })
export class DoctrineMigrationVersions extends BaseEntity {
  @PrimaryColumn('varchar', { length: 191 }) // Change the type to an appropriate numeric type
  version: string;

  @Column('datetime', { nullable: true, precision: 0 })
  executed_at: Date;

  @Column('int', { nullable: true })
  execution_time: number;
}
