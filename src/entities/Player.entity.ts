import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ConvocatoriaPlayer } from './ConvocatoriaPlayer.entity';
import { Country } from './Country.entity';
import { PlayerJustification } from './PlayerJustification.entity';
import { Position } from './Position.entity';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { TrainingAsistPlayer } from './TrainingAsistPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'player' })
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255 })
  lastname: string;

  @Column('int', { nullable: true })
  age: number;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  weight: number;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  height: number;

  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  shoes: number;

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

  @Column('int', { nullable: true })
  position_id: number;

  @Column('int', { nullable: true })
  secondary_position_id: number;

  @Column('int', { nullable: true })
  goal_assistances: number;

  @Column('smallint', { default: 0 })
  skillful_leg: number;

  @Column('tinyint', { default: 1 })
  is_active: number;

  @Column('date', { nullable: true })
  birth_date: Date;

  @Column('varchar', { length: 50, nullable: true })
  phone: string;

  @Column('varchar', { length: 250, nullable: true })
  email: string;

  @Column('varchar', { length: 250, nullable: true })
  number_document: string;

  @Column('varchar', { length: 250, nullable: true })
  health_card: string;

  @Column('date', { nullable: true })
  date_of_birth: Date;

  @Column('date', { nullable: true })
  medical_review_date: Date;

  @Column('varchar', { length: 250, nullable: true })
  last_club: string;

  @Column('int', { nullable: true })
  country_id: number;

  @DeleteDateColumn({ type: 'datetime', precision: 0, nullable: true })
  deleted_at: Date;

  // Relationships
  @OneToMany(
    () => ConvocatoriaPlayer,
    (convocatoria_player) => convocatoria_player.player,
  )
  convocatoria_player: ConvocatoriaPlayer[];

  @ManyToOne(
    () => Position,
    (position) => position.player_player_secondary_position_idToposition,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'secondary_position_id' })
  position_player_secondary_position_idToposition: Position;

  @ManyToOne(
    () => Position,
    (position) => position.player_player_position_idToposition,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'position_id' })
  position_player_position_idToposition: Position;

  @ManyToOne(() => Country, (country) => country.player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(
    () => PlayerJustification,
    (player_justification) => player_justification.player,
  )
  player_justification: PlayerJustification[];

  @OneToMany(() => SeasonPlayer, (season_player) => season_player.player)
  season_player: SeasonPlayer[];

  @OneToMany(
    () => TrainingAsistPlayer,
    (training_asist_player) => training_asist_player.player,
  )
  training_asist_player: TrainingAsistPlayer[];
}
