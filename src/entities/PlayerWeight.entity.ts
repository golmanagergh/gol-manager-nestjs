import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'player_weight' })
export class PlayerWeight extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 5, scale: 2 })
  weight: number;

  @Column('int')
  season_player_id: number;

  @Column('date')
  date: Date;

  @Column('time', { precision: 0 })
  time: Date;

  // Relationships
  @ManyToOne(
    () => SeasonPlayer,
    (season_player) => season_player.player_weight,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'season_player_id' })
  season_player: SeasonPlayer;
}

// Continue with the remaining entities...
