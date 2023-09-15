import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Tactic } from './Tactic.entity';
import { Team } from './Team.entity';

@Entity({ name: 'type_soccer' })
export class TypeSoccer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('int')
  number_players: number;

  // Relationships
  @OneToMany(() => Tactic, (tactic) => tactic.type_soccer, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  tactic: Tactic[];

  @OneToMany(() => Team, (team) => team.type_soccer, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  team: Team[];
}
