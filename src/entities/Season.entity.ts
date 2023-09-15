import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ClubMonthlyPayments } from './ClubMonthlyPayments.entity';
import { Country } from './Country.entity';
import { Customer } from './Customer.entity';
import { ExerciseCalendar } from './ExerciseCalendar.entity';
import { Game } from './Game.entity';
import { KitPayments } from './KitPayments.entity';
import { NoteCalendar } from './NoteCalendar.entity';
import { NotificationAutomatic } from './NotificationAutomatic.entity';
import { OtherPayments } from './OtherPayments.entity';
import { PlayerJustification } from './PlayerJustification.entity';
import { PlayerSportsInjuries } from './PlayerSportsInjuries.entity';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { Team } from './Team.entity';
import { TrainingAsist } from './TrainingAsist.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'season' })
export class Season extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  team_id: number;

  @Column('int', { nullable: true })
  customer_id: number;

  @Column('int')
  year: number;

  @Column('tinyint', { default: 1 })
  is_active: number;

  @Column('int', { nullable: true })
  country_id: number;

  // Relationships
  @OneToMany(
    () => ClubMonthlyPayments,
    (club_monthly_payments) => club_monthly_payments.season,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  club_monthly_payments: ClubMonthlyPayments[];

  @OneToMany(
    () => ExerciseCalendar,
    (exercise_calendar) => exercise_calendar.season,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  exercise_calendar: ExerciseCalendar[];

  @OneToMany(() => Game, (game) => game.season, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  game: Game[];

  @OneToMany(() => KitPayments, (kit_payments) => kit_payments.season, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  kit_payments: KitPayments[];

  @OneToMany(() => NoteCalendar, (note_calendar) => note_calendar.season, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  note_calendar: NoteCalendar[];

  @OneToMany(
    () => NotificationAutomatic,
    (notification_automatic) => notification_automatic.season,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  notification_automatic: NotificationAutomatic[];

  @OneToMany(() => OtherPayments, (other_payments) => other_payments.season, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  other_payments: OtherPayments[];

  @OneToMany(
    () => PlayerJustification,
    (player_justification) => player_justification.season,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  player_justification: PlayerJustification[];

  @OneToMany(
    () => PlayerSportsInjuries,
    (player_sports_injuries) => player_sports_injuries.season,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  player_sports_injuries: PlayerSportsInjuries[];

  @ManyToOne(() => Team, (team) => team.season, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @ManyToOne(() => Customer, (customer) => customer.season, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => Country, (country) => country.season, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(() => SeasonPlayer, (season_player) => season_player.season, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  season_player: SeasonPlayer[];

  @OneToMany(() => TrainingAsist, (training_asist) => training_asist.season, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  training_asist: TrainingAsist[];
}
