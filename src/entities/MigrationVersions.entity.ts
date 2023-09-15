import { Column, PrimaryColumn } from 'typeorm';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'migration_versions' })
export class MigrationVersions extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 14 }) // Adjust length as needed
  version: string;

  @Column('datetime', { precision: 0 })
  executed_at: Date;
}
