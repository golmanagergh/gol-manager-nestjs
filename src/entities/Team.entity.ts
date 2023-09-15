import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Season } from './Season.entity';
import { Tactic } from './Tactic.entity';
import { TypeSoccer } from './TypeSoccer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'team' })
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

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

  @Column('varchar', { length: 255, nullable: true })
  category: string;

  @Column('decimal', { precision: 15, scale: 2, nullable: true })
  monthly_cost: number;

  @Column('decimal', { precision: 15, scale: 2, nullable: true })
  kit_payment_cost: number;

  @Column('decimal', { precision: 15, scale: 2, nullable: true })
  other_payment_cost: number;

  @Column('int', { nullable: true })
  type_soccer_id: number;

  @Column('int', { nullable: true })
  alignment_default_u7_id: number;

  @Column('int', { nullable: true })
  alignment_default_u8_id: number;

  @Column('int', { nullable: true })
  alignment_default_u11_id: number;

  @Column('varchar', { length: 255, nullable: true })
  image_trainer: string;

  @Column('varchar', { length: 255, nullable: true })
  stadium_name: string;

  @Column('int', { nullable: true })
  number_clubes_league: number;

  // Relationships
  @OneToMany(() => Season, (season) => season.team, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  season: Season[];

  @ManyToOne(() => TypeSoccer, (typeSoccer) => typeSoccer.team, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'type_soccer_id' })
  type_soccer: TypeSoccer;

  @ManyToOne(
    () => Tactic,
    (tactic) => tactic.team_team_alignment_default_u7_idTotactic,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'alignment_default_u7_id' })
  tactic_team_alignment_default_u7_idTotactic: Tactic;

  @ManyToOne(
    () => Tactic,
    (tactic) => tactic.team_team_alignment_default_u11_idTotactic,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'alignment_default_u11_id' })
  tactic_team_alignment_default_u11_idTotactic: Tactic;

  @ManyToOne(
    () => Tactic,
    (tactic) => tactic.team_team_alignment_default_u8_idTotactic,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'alignment_default_u8_id' })
  tactic_team_alignment_default_u8_idTotactic: Tactic;
}
