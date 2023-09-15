import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ConvocatoriaPlayer } from './ConvocatoriaPlayer.entity';
import { JustificationTypeTranslation } from './JustificationTypeTranslation.entity';
import { PlayerJustification } from './PlayerJustification.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'justification_type' })
export class JustificationType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  icon: string;

  @Column('int', { nullable: true, default: 0 })
  nro_order: number;

  @Column('boolean', { nullable: true, default: true })
  show_training: boolean;

  @Column('boolean', { nullable: true, default: true })
  show_announcement: boolean;

  @CreateDateColumn({
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP(0)',
    type: 'timestamp',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @OneToMany(
    () => ConvocatoriaPlayer,
    (convocatoria_player) => convocatoria_player.justification_type,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  convocatoria_player: ConvocatoriaPlayer[];

  @OneToMany(
    () => JustificationTypeTranslation,
    (justification_type_translation) =>
      justification_type_translation.justification_type,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  justification_type_translation: JustificationTypeTranslation[];

  @OneToMany(
    () => PlayerJustification,
    (player_justification) => player_justification.justification_type,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  player_justification: PlayerJustification[];
}
