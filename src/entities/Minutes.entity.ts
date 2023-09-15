import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './Game.entity';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'minutes' })
export class Minutes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  game_id: number;

  @Column('int')
  quantity: number;

  @Column('int')
  seasonplayer_id: number;

  // Relationships
  @ManyToOne(() => SeasonPlayer, (season_player) => season_player.minutes, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'seasonplayer_id' })
  season_player: SeasonPlayer;

  @ManyToOne(() => Game, (game) => game.minutes, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'game_id' })
  game: Game;
}
