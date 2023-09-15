import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'TT_list_season_player' })
export class TT_list_season_player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { default: 0 })
  game_id: number;

  @Column('int', { default: 0 })
  game_alineacion_id: number;

  @Column('int', { default: 0 })
  seasonplayer_id: number;

  @Column('varchar', { length: 255, nullable: true })
  list_season_player: string | null;
}
