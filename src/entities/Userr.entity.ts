import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'userr' })
export class Userr extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  firstName: string;

  @Column('varchar', { length: 255 })
  lastName: string;

  @Column('int')
  age: number;
}
