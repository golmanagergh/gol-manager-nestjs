import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'reset_password_request' })
export class ResetPasswordRequest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  user_id: number;

  @Column('varchar', { length: 20 })
  selector: string;

  @Column('varchar', { length: 100 })
  hashed_token: string;

  @Column('datetime', { precision: 0 })
  requested_at: Date;

  @Column('datetime', { precision: 0 })
  expires_at: Date;

  // Relationships
  @ManyToOne(() => User, (user) => user.reset_password_request, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
