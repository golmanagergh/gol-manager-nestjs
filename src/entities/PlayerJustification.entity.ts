import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JustificationType } from './JustificationType.entity';
import { Player } from './Player.entity';
import { Season } from './Season.entity';

@Entity({ name: 'player_justification' })
export class PlayerJustification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  player_id: number;

  @Column('int', { nullable: true })
  justification_type_id: number;

  @Column('tinyint', { nullable: true })
  is_active: boolean;

  @Column('int', { nullable: true })
  season_id: number;

  // Relationships
  @ManyToOne(() => Season, (season) => season.player_justification, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @ManyToOne(
    () => JustificationType,
    (justification_type) => justification_type.player_justification,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'justification_type_id' })
  justification_type: JustificationType;

  @ManyToOne(() => Player, (player) => player.player_justification, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'player_id' })
  player: Player;
}
