import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Game } from './Game.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'media_game' })
export class MediaGame extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  game_id: number;

  @Column('varchar', { length: 255 })
  file: string;

  @Column('int')
  file_size: number;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  // Relationships
  @ManyToOne(() => Game, (game) => game.media_game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'game_id' })
  game: Game;
}
