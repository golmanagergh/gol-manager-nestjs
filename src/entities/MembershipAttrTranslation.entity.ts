import {
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { MembershipAttr } from './MembershipAttr.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'membership_attr_translation' })
export class MembershipAttrTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  title: string;

  @Column('longtext', { nullable: true })
  description: string;

  @Column('varchar', { length: 5 })
  locale: string;

  @Column('int', { nullable: true })
  translatable_id: number;

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
  @ManyToOne(
    () => MembershipAttr,
    (membership_attr) => membership_attr.membership_attr_translation,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'translatable_id' })
  membership_attr: MembershipAttr;
}
