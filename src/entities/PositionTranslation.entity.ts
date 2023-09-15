import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Position } from './Position.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'position_translation' })
export class PositionTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255, nullable: true })
  slug_translation: string;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('text', { nullable: true })
  description: string;

  // Relationships
  @ManyToOne(() => Position, (position) => position.position_translation, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'translatable_id' })
  position: Position;
}
