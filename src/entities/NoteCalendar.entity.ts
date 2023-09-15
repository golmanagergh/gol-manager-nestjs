import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Season } from './Season.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'note_calendar' })
export class NoteCalendar extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  season_id: number;

  @Column('int')
  type: number;

  @Column('varchar', { length: 255 })
  note: string;

  @Column('date')
  date: Date;

  @CreateDateColumn({
    nullable: true,
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
  @ManyToOne(() => Season, (season) => season.note_calendar, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'season_id' })
  season: Season;
}
