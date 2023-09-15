import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DifficultyTranslation } from './DifficultyTranslation.entity';
import { Game } from './Game.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'difficulty' })
export class Difficulty extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  @CreateDateColumn({
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

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
    () => DifficultyTranslation,
    (difficultyTranslation) => difficultyTranslation.difficulty,
  )
  difficulty_translation: DifficultyTranslation[];

  @OneToMany(() => Game, (game) => game.difficulty)
  game: Game[];
}
