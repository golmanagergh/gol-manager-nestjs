import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Season } from './Season.entity';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'player_sports_injuries' })
export class PlayerSportsInjuries extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  season_player_id: number;

  @Column('int')
  season_id: number;

  @Column('boolean', { nullable: true, default: false })
  finish: boolean;

  @Column('varchar', { length: 255, nullable: true })
  note: string;

  @Column('date', { nullable: true })
  date_start: Date;

  @Column('date', { nullable: true })
  date_end: Date;

  @CreateDateColumn({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    type: 'timestamp',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @ManyToOne(
    () => SeasonPlayer,
    (season_player) => season_player.player_sports_injuries,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'season_player_id' })
  season_player: SeasonPlayer;

  @ManyToOne(() => Season, (season) => season.player_sports_injuries, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;
}
