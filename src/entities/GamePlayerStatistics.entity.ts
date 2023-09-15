import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './Game.entity';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'game_player_statistics' })
export class GamePlayerStatistics extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  game_id: number;

  @Column('int')
  seasonplayer_id: number;

  @Column('int', { default: 0 })
  stolen_balls: number;

  @Column('int', { default: 0 })
  penalties_committed: number;

  @Column('int', { default: 0 })
  forced_penalties: number;

  @Column('int', { default: 0 })
  kilometers_traveled: number;

  @Column('int', { default: 0 })
  goal_assistances: number;

  @Column('int', { default: 0 })
  red_cards: number;

  @Column('int', { default: 0 })
  yellow_cards: number;

  @Column('int', { default: 0 })
  goals: number;

  @Column('int', { default: 0 })
  minutes: number;

  @Column('int', { default: 0 })
  shots_on_goal: number;

  @Column('int', { default: 0 })
  is_titular: number;

  @Column('int', { default: 0 })
  stops_made: number;

  // Relationships
  @ManyToOne(
    () => SeasonPlayer,
    (season_player) => season_player.game_player_statistics,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'seasonplayer_id' })
  season_player: SeasonPlayer;

  @ManyToOne(() => Game, (game) => game.game_player_statistics, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'game_id' })
  game: Game;
}
