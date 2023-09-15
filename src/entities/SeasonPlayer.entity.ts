import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClubMonthlyPayments } from './ClubMonthlyPayments.entity';
import { GamePlayerStatistics } from './GamePlayerStatistics.entity';
import { GoalAssistances } from './GoalAssistances.entity';
import { KilometersTraveled } from './KilometersTraveled.entity';
import { KitPayments } from './KitPayments.entity';
import { NotePlayer } from './NotePlayer.entity';
import { OtherPayments } from './OtherPayments.entity';
import { Player } from './Player.entity';
import { PlayerSportsInjuries } from './PlayerSportsInjuries.entity';
import { PlayerWeight } from './PlayerWeight.entity';
import { RedCards } from './RedCards.entity';
import { Season } from './Season.entity';
import { SharePlayer } from './SharePlayer.entity';
import { ShotsOnGoal } from './ShotsOnGoal.entity';
import { Titulars } from './Titulars.entity';
import { YellowCards } from './YellowCards.entity';

@Entity({ name: 'season_player' })
export class SeasonPlayer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  season_id: number;

  @Column('int')
  player_id: number;

  @Column('int', { nullable: true })
  games: number;

  @Column('int', { nullable: true })
  goals: number;

  @Column('int', { nullable: true })
  yellow_card: number;

  @Column('int', { nullable: true })
  red_card: number;

  @Column('int', { nullable: true })
  dorsal: number;

  @Column('longtext', { nullable: true })
  minutes: string;

  // Relationships
  @OneToMany(
    () => ClubMonthlyPayments,
    (club_monthly_payments) => club_monthly_payments.season_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  club_monthly_payments: ClubMonthlyPayments[];

  @OneToMany(
    () => GamePlayerStatistics,
    (game_player_statistics) => game_player_statistics.season_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  game_player_statistics: GamePlayerStatistics[];

  @OneToMany(
    () => GoalAssistances,
    (goal_assistances) => goal_assistances.season_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  goal_assistances: GoalAssistances[];

  @OneToMany(
    () => KilometersTraveled,
    (kilometers_traveled) => kilometers_traveled.season_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  kilometers_traveled: KilometersTraveled[];

  @OneToMany(() => KitPayments, (kit_payments) => kit_payments.season_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  kit_payments: KitPayments[];

  @OneToMany(() => NotePlayer, (note_player) => note_player.season_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  note_player: NotePlayer[];

  @OneToMany(
    () => OtherPayments,
    (other_payments) => other_payments.season_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  other_payments: OtherPayments[];

  @OneToMany(
    () => PlayerSportsInjuries,
    (player_sports_injuries) => player_sports_injuries.season_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  player_sports_injuries: PlayerSportsInjuries[];

  @OneToMany(
    () => PlayerWeight,
    (player_weight) => player_weight.season_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  player_weight: PlayerWeight[];

  @OneToMany(() => RedCards, (red_cards) => red_cards.season_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  red_cards: RedCards[];

  @ManyToOne(() => Season, (season) => season.season_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @ManyToOne(() => Player, (player) => player.season_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'player_id' })
  player: Player;

  @OneToMany(() => SharePlayer, (share_player) => share_player.season_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  share_player: SharePlayer[];

  @OneToMany(
    () => ShotsOnGoal,
    (shots_on_goal) => shots_on_goal.season_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  shots_on_goal: ShotsOnGoal[];

  @OneToMany(() => Titulars, (titulars) => titulars.season_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  titulars: Titulars[];

  @OneToMany(() => YellowCards, (yellow_cards) => yellow_cards.season_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  yellow_cards: YellowCards[];
}
