import { Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'collaborator' })
export class Collaborator extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  names: string;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  @Column('varchar', { length: 255, nullable: true })
  link: string;

  @Column('varchar', { length: 255, nullable: true })
  description: string;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;
}
