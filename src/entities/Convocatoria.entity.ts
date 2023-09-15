import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ConvocatoriaPlayer } from './ConvocatoriaPlayer.entity';
import { Game } from './Game.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'convocatoria' })
export class Convocatoria extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { unique: true })
  game_id: number;

  // Relationships
  @ManyToOne(() => Game, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'game_id' })
  game: Game;

  @OneToMany(
    () => ConvocatoriaPlayer,
    (convocatoria_player) => convocatoria_player.convocatoria,
  )
  convocatoria_player: ConvocatoriaPlayer[];
}
