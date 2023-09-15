import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Player } from './Player.entity';
import { PositionTranslation } from './PositionTranslation.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'position' })
export class Position extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255 })
  slug: string;

  @Column('int')
  field_position: number;

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

  // Relationships
  @OneToMany(
    () => Player,
    (player) => player.position_player_secondary_position_idToposition,
  )
  player_player_secondary_position_idToposition: Player[];

  @OneToMany(
    () => Player,
    (player) => player.position_player_position_idToposition,
  )
  player_player_position_idToposition: Player[];

  @OneToMany(
    () => PositionTranslation,
    (position_translation) => position_translation.position,
  )
  position_translation: PositionTranslation[];
}
