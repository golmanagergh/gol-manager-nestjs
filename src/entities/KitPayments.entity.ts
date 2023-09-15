import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Season } from './Season.entity';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'kit_payments' })
export class KitPayments extends BaseEntity {
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

  @Column({ type: 'date', nullable: true })
  date_paid: Date;

  @Column('varchar', { length: 255, nullable: true })
  note: string;

  @Column('decimal', { precision: 15, scale: 2, default: 0.0 })
  amount: number;

  // Relationships
  @ManyToOne(
    () => SeasonPlayer,
    (season_player) => season_player.kit_payments,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'seasonplayer_id' })
  season_player: SeasonPlayer;

  @ManyToOne(() => Season, (season) => season.kit_payments, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;
}
