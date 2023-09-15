import {
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Player } from './Player.entity';
import { TrainingAsist } from './TrainingAsist.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'training_asist_player' })
export class TrainingAsistPlayer extends BaseEntity {
  @PrimaryColumn()
  training_asist_id: number;

  @PrimaryColumn()
  player_id: number;

  @ManyToOne(
    () => TrainingAsist,
    (training_asist) => training_asist.training_asist_player,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'training_asist_id', referencedColumnName: 'id' }])
  training_asist: TrainingAsist;

  @ManyToOne(() => Player, (player) => player.training_asist_player, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'player_id', referencedColumnName: 'id' }])
  player: Player;
}
