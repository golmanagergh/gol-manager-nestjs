import {
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './Customer.entity';
import { Player } from './Player.entity';
import { Season } from './Season.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'country' })
export class Country extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  name: string;

  @Column('varchar', { length: 255 })
  code: string;

  @Column('varchar', { length: 255, nullable: true })
  flag: string;

  @UpdateDateColumn({
    nullable: true,
    default: () => 'NOW(0)',
    onUpdate: 'NOW(0)',
    type: 'datetime',
    precision: 0,
  })
  updated_at: Date;

  // Relationships
  @OneToMany(() => Customer, (customer) => customer.country)
  customer: Customer[];

  @OneToMany(() => Player, (player) => player.country)
  player: Player[];

  @OneToMany(() => Season, (season) => season.country)
  season: Season[];
}
