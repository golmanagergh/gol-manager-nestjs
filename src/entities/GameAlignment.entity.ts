import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './Game.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'game_alignment' })
export class GameAlignment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  tactic: string;

  @Column('longtext')
  alignment: string;

  // Relationships
  @ManyToOne(
    () => Game,
    (game) => game.game_alignment_game_alignment_idTogame_alignment,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'game_id' })
  game_game_alignment_idTogame_alignment: Game;

  @ManyToOne(
    () => Game,
    (game) => game.game_alignment_game_rival_alignment_idTogame_alignment,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'game_id' })
  game_game_rival_alignment_idTogame_alignment: Game;
}
