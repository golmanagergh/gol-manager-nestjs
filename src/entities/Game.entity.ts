import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Difficulty } from './Difficulty.entity';
import { GameAlignment } from './GameAlignment.entity';
import { GamePlayerStatistics } from './GamePlayerStatistics.entity';
import { GoalAssistances } from './GoalAssistances.entity';
import { Goals } from './Goals.entity';
import { KilometersTraveled } from './KilometersTraveled.entity';
import { MediaGame } from './MediaGame.entity';
import { Minutes } from './Minutes.entity';
import { NoteGame } from './NoteGame.entity';
import { Season } from './Season.entity';
import { ShotsOnGoal } from './ShotsOnGoal.entity';
import { Titulars } from './Titulars.entity';

@Entity({ name: 'game' })
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  season_id: number;

  @Column('varchar', { length: 255 })
  rival: string;

  @Column('varchar', { length: 255 })
  locality: string;

  @Column('int')
  day: number;

  @Column('int', { nullable: true })
  current_position_league: number;

  @Column('datetime', { precision: 0 })
  date: Date;

  @Column('int')
  rival_goals: number;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  @Column('varchar', { nullable: true, length: 255 })
  competition: string;

  @Column('int')
  shots_goal: number;

  @Column('int')
  shots_opponent: number;

  @Column('int')
  corners_favor: number;

  @Column('int')
  corners_against: number;

  @Column('int')
  penalties_favor: number;

  @Column('int')
  penalties_against: number;

  @Column('int')
  fouls_favor: number;

  @Column('int')
  fouls_against: number;

  @Column('int', { default: 0, nullable: true })
  total_shots: number;

  @Column('int', { default: 0, nullable: true })
  total_shots_against: number;

  @Column('int', { default: 0, nullable: true })
  yellow_cards: number;

  @Column('int', { default: 0, nullable: true })
  yellow_cards_against: number;

  @Column('int', { default: 0, nullable: true })
  red_cards: number;

  @Column('int', { default: 0, nullable: true })
  red_cards_against: number;

  @Column('int', { nullable: true, unique: true })
  alignment_id: number;

  @Column('int', { default: 90 })
  time_match: number;

  @Column('int', { default: 11 })
  category: number;

  @Column('int', { nullable: true, unique: true })
  rival_alignment_id: number;

  @Column('int', { nullable: true })
  pressure_rival_id: number;

  @Column('int', { nullable: true })
  opponent_current_position_league: number;

  @Column('int', { nullable: true })
  competition_id: number;

  @Column('int', { nullable: true })
  locality_id: number;

  @DeleteDateColumn({ type: 'datetime', precision: 0, nullable: true })
  deleted_at: Date;

  @ManyToOne(() => Season, (season) => season.game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @ManyToOne(
    () => GameAlignment,
    (game_alignment) => game_alignment.game_game_alignment_idTogame_alignment,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn({ name: 'alignment_id' })
  game_alignment_game_alignment_idTogame_alignment: GameAlignment;

  @ManyToOne(
    () => GameAlignment,
    (game_alignment) =>
      game_alignment.game_game_rival_alignment_idTogame_alignment,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    },
  )
  @JoinColumn({ name: 'rival_alignment_id' })
  game_alignment_game_rival_alignment_idTogame_alignment: GameAlignment;

  @ManyToOne(() => Difficulty, (difficulty) => difficulty.game, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'pressure_rival_id' })
  difficulty: Difficulty;

  @OneToMany(
    () => GamePlayerStatistics,
    (game_player_statistics) => game_player_statistics.game,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    },
  )
  game_player_statistics: GamePlayerStatistics[];

  @OneToMany(
    () => GoalAssistances,
    (goal_assistances) => goal_assistances.game,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    },
  )
  goal_assistances: GoalAssistances[];

  @OneToMany(() => Goals, (goals) => goals.game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  goals: Goals[];

  @OneToMany(
    () => KilometersTraveled,
    (kilometers_traveled) => kilometers_traveled.game,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    },
  )
  kilometers_traveled: KilometersTraveled[];

  @OneToMany(() => MediaGame, (media_game) => media_game.game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  media_game: MediaGame[];

  @OneToMany(() => Minutes, (minutes) => minutes.game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  minutes: Minutes[];

  @OneToMany(() => NoteGame, (note_game) => note_game.game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  note_game: NoteGame[];

  @OneToMany(() => ShotsOnGoal, (shots_on_goal) => shots_on_goal.game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  shots_on_goal: ShotsOnGoal[];

  @OneToMany(() => Titulars, (titulars) => titulars.game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  titulars: Titulars[];
}
