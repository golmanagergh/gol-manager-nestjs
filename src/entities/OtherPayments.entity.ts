import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Season } from './Season.entity';
import { SeasonPlayer } from './SeasonPlayer.entity';

@Entity({ name: 'other_payments' })
export class OtherPayments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  seasonplayer_id: number;

  @Column('int')
  season_id: number;

  @Column('boolean', { default: false })
  paid: boolean;

  @Column('datetime', { nullable: true })
  date_paid: Date;

  @Column('varchar', { length: 255, nullable: true })
  note: string;

  @Column('decimal', { precision: 15, scale: 2, default: 0.0 })
  amount: number;

  // Relationships
  @ManyToOne(
    () => SeasonPlayer,
    (season_player) => season_player.other_payments,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'seasonplayer_id' })
  season_player: SeasonPlayer;

  @ManyToOne(() => Season, (season) => season.other_payments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;
}

// Continue with the remaining entities...
