import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Season } from './Season.entity';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'club_monthly_payments' })
export class ClubMonthlyPayments extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  seasonplayer_id: number;

  @Column('int')
  season_id: number;

  @Column('date')
  date: Date;

  @Column('boolean', { default: false })
  paid: boolean;

  @Column('date', { nullable: true })
  date_paid: Date;

  @Column('varchar', { length: 255, nullable: true })
  note: string;

  @Column('decimal', {
    precision: 15,
    scale: 2,
    default: '0.00',
    nullable: true,
  })
  amount: number;

  // Relationships
  @ManyToOne(
    () => SeasonPlayer,
    (season_player) => season_player.club_monthly_payments,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  season_player: SeasonPlayer;

  @ManyToOne(() => Season, (season) => season.club_monthly_payments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  season: Season;
}
