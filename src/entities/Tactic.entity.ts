import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Team } from './Team.entity';
import { TypeSoccer } from './TypeSoccer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'tactic' })
export class Tactic extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('int')
  type_soccer_id: number;

  // Relationships
  @ManyToOne(() => TypeSoccer, (type_soccer) => type_soccer.tactic, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'type_soccer_id' })
  type_soccer: TypeSoccer;

  @OneToMany(
    () => Team,
    (team) => team.tactic_team_alignment_default_u7_idTotactic,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'alignment_default_u7_id' })
  team_team_alignment_default_u7_idTotactic: Team[];

  @OneToMany(
    () => Team,
    (team) => team.tactic_team_alignment_default_u11_idTotactic,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'alignment_default_u11_id' })
  team_team_alignment_default_u11_idTotactic: Team[];

  @OneToMany(
    () => Team,
    (team) => team.tactic_team_alignment_default_u8_idTotactic,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'alignment_default_u8_id' })
  team_team_alignment_default_u8_idTotactic: Team[];
}
