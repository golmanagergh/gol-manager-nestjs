import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Game } from './Game.entity';
import { LocalityTranslation } from './LocalityTranslation.entity';

@Entity({ name: 'locality' })
export class Locality extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  created_at: Date;

  // Relationships
  @OneToMany(() => Game, (game) => game.locality, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  game: Game[];

  @OneToMany(
    () => LocalityTranslation,
    (locality_translation) => locality_translation.locality,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  locality_translation: LocalityTranslation[];
}
