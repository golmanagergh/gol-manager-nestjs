import {
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Season } from './Season.entity';
import { TrainingAsistPlayer } from './TrainingAsistPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'training_asist' })
export class TrainingAsist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  season_id: number;

  @Column({ type: 'date' })
  date: Date;

  // Relationships
  @ManyToOne(() => Season, (season) => season.training_asist, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;

  @OneToMany(
    () => TrainingAsistPlayer,
    (training_asist_player) => training_asist_player.training_asist,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  training_asist_player: TrainingAsistPlayer[];
}
