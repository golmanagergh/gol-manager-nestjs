import {
  Column,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Convocatoria } from './Convocatoria.entity';
import { JustificationType } from './JustificationType.entity';
import { Player } from './Player.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'convocatoria_player' })
@Index('FK_F3DF29154EC001D4', ['justification_type_id'])
@Index('IDX_8E24BB624EE93BE6', ['convocatoria_id'])
@Index('IDX_8E24BB6299E6F5DF', ['player_id'])
export class ConvocatoriaPlayer extends BaseEntity {
  @PrimaryColumn()
  convocatoria_id: number;

  @PrimaryColumn()
  player_id: number;

  @Column('int', { nullable: true })
  justification_type_id: number;

  @Column('boolean', { default: true })
  is_active: boolean;

  // Relationships
  @ManyToOne(
    () => Convocatoria,
    (convocatoria) => convocatoria.convocatoria_player,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'convocatoria_id' })
  convocatoria: Convocatoria;

  @ManyToOne(() => Player, (player) => player.convocatoria_player, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'player_id' })
  player: Player;

  @ManyToOne(
    () => JustificationType,
    (justification_type) => justification_type.convocatoria_player,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION', nullable: true },
  )
  @JoinColumn({ name: 'justification_type_id' })
  justification_type: JustificationType;
}
