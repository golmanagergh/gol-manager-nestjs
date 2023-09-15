import {
  Column,
  CreateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MembershipAttr } from './MembershipAttr.entity';
import { MembershipTranslation } from './MembershipTranslation.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'membership' })
export class Membership extends BaseEntity {
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

  // Relationships
  @OneToMany(
    () => MembershipAttr,
    (membership_attr) => membership_attr.membership,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  membership_attr: MembershipAttr[];

  @OneToMany(
    () => MembershipTranslation,
    (membership_translation) => membership_translation.membership,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  membership_translation: MembershipTranslation[];
}
