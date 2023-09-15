import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Locality } from './Locality.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'locality_translation' })
@Unique('competition_translation_unique_translation', [
  'translatable_id',
  'locale',
])
export class LocalityTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  name: string;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('int', { nullable: true })
  translatable_id: number;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  @ManyToOne(() => Locality, (locality) => locality.locality_translation, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'translatable_id' })
  locality: Locality;
}
