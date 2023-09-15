import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ResetPasswordRequest } from './ResetPasswordRequest.entity';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('json', { nullable: true })
  roles: any;

  @Column('varchar', { length: 180 })
  email: string;

  @Column('varchar', { length: 255 })
  password: string;

  @Column()
  enabled: boolean;

  @Column('varchar', { length: 255 })
  celular: string;

  @OneToMany(
    () => ResetPasswordRequest,
    (reset_password_request) => reset_password_request.user,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  reset_password_request: ResetPasswordRequest[];
}
