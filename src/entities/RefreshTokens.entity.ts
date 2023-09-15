import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'refresh_tokens' })
export class RefreshTokens extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 128, unique: true })
  refresh_token: string;

  @Column('varchar', { length: 255 })
  username: string;

  @Column('datetime', { precision: 0 })
  valid: Date;
}

// Continue with the remaining entities...
