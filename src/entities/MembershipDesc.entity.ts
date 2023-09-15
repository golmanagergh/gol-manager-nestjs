import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { MembershipDescTranslation } from './MembershipDescTranslation.entity';
import { Entity, BaseEntity } from 'typeorm';

@Entity({ name: 'membership_desc' })
export class MembershipDesc extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 255, nullable: true })
  image: string;

  // Relationships
  @OneToMany(
    () => MembershipDescTranslation,
    (membership_desc_translation) =>
      membership_desc_translation.membership_desc,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  membership_desc_translation: MembershipDescTranslation[];
}
