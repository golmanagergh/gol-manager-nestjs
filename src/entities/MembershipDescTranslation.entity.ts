import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MembershipDesc } from './MembershipDesc.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'membership_desc_translation' })
export class MembershipDescTranslation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: true })
  translatable_id: number;

  @Column('varchar', { length: 255, nullable: true })
  title: string;

  @Column('varchar', { length: 255, nullable: true })
  description: string;

  @Column('varchar', { length: 5 })
  locale: string;

  // Relationships
  @ManyToOne(
    () => MembershipDesc,
    (membership_desc) => membership_desc.membership_desc_translation,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn({ name: 'translatable_id' })
  membership_desc: MembershipDesc;
}
