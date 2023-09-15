import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Membership } from './Membership.entity';
import { MembershipAttrTranslation } from './MembershipAttrTranslation.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'membership_attr' })
export class MembershipAttr extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  membership_parent_id: number;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

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
  @ManyToOne(() => Membership, (membership) => membership.membership_attr, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'membership_parent_id' })
  membership: Membership;

  @OneToMany(
    () => MembershipAttrTranslation,
    (membership_attr_translation) =>
      membership_attr_translation.membership_attr,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  membership_attr_translation: MembershipAttrTranslation[];
}
