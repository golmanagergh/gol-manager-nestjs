import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Membership } from './Membership.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'membership_translation' })
export class MembershipTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 255, nullable: true })
  title: string;

  @Column('longtext', { nullable: true })
  description: string;

  @Column('varchar', { length: 5 })
  locale: string;

  // Relationships
  @ManyToOne(
    () => Membership,
    (membership) => membership.membership_translation,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'translatable_id' })
  membership: Membership;
}
