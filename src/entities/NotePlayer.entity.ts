import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SeasonPlayer } from './SeasonPlayer.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'note_player' })
export class NotePlayer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  seasonplayer_id: number;

  @Column('varchar', { length: 255 })
  note: string;

  // Relationships
  @ManyToOne(() => SeasonPlayer, (season_player) => season_player.note_player, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'seasonplayer_id' })
  season_player: SeasonPlayer;
}
