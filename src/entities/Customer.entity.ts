import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Country } from './Country.entity';
import { CouponCustomer } from './CouponCustomer.entity';
import { CustomerFingerprint } from './CustomerFingerprint.entity';
import { Document } from './Document.entity';
import { Exercise } from './Exercise.entity';
import { ExerciseQualification } from './ExerciseQualification.entity';
import { Notification } from './Notification.entity';
import { NotificationAutomatic } from './NotificationAutomatic.entity';
import { NotificationReads } from './NotificationReads.entity';
import { NotificationRemoves } from './NotificationRemoves.entity';
import { ResetPasswordTokenRequest } from './ResetPasswordTokenRequest.entity';
import { Season } from './Season.entity';
import { SharePlayer } from './SharePlayer.entity';
import { Strategy } from './Strategy.entity';
import { Suggestion } from './Suggestion.entity';
import { Support } from './Support.entity';

@Entity({ name: 'customer' })
@Index('IDX_81398E09F92F3E70', ['country_id'])
export class Customer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, length: 180 })
  email: string;

  @Column('varchar', { length: 20, nullable: true })
  username: string;

  @Column('json')
  roles: any;

  @Column('varchar', { length: 255 })
  password: string;

  @Column('boolean')
  enabled: boolean;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255, nullable: true })
  surname: string;

  @Column('varchar', { length: 255, nullable: true })
  address: string;

  @Column('varchar', { length: 255, nullable: true })
  celular: string;

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

  @Column('int', { nullable: true })
  country_id: number;

  @CreateDateColumn({
    nullable: true,
    default: () => 'NOW(6)',
    type: 'datetime',
    precision: 6,
  })
  created_at: Date;

  @Column('int', { nullable: true })
  season_active: number;

  @Column('varchar', { length: 255, nullable: true })
  type_account: string;

  @Column('boolean', { nullable: true })
  is_pro: boolean;

  @Column('text', { nullable: true })
  purchase: string;

  @Column('varchar', { length: 255, nullable: true })
  membership_id: string;

  @Column('tinyint', { nullable: true })
  coupon_status: number;

  @Column('date', { nullable: true })
  date_of_birth: Date;

  @Column('varchar', { length: 50, nullable: true })
  phone: string;

  @Column('varchar', { length: 16, nullable: true })
  google_auth_code: string;

  @Column('boolean', { nullable: true, default: false })
  google_auth_code_verified: boolean;

  @Column('int', { nullable: true })
  is_deleted: number;

  @DeleteDateColumn({ type: 'datetime', nullable: true, precision: 0 })
  deleted_at: Date;

  @Column('text', { nullable: true })
  purchase_platform: string;

  @Column('varchar', { length: 20, nullable: true })
  plain_password: string;

  // Relationships
  @OneToMany(
    () => CouponCustomer,
    (coupon_customer) => coupon_customer.customer,
  )
  coupon_customer: CouponCustomer[];

  @ManyToOne(() => Country, (country) => country.customer, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
    nullable: true,
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(
    () => CustomerFingerprint,
    (customer_fingerprint) => customer_fingerprint.customer,
  )
  customer_fingerprint: CustomerFingerprint[];

  @OneToMany(() => Document, (document) => document.customer)
  document: Document[];

  @OneToMany(() => Exercise, (exercise) => exercise.customer)
  exercise: Exercise[];

  @OneToMany(
    () => ExerciseQualification,
    (exercise_qualification) => exercise_qualification.customer,
  )
  exercise_qualification: ExerciseQualification[];

  @OneToMany(() => Notification, (notification) => notification.customer)
  notification: Notification[];

  @OneToMany(
    () => NotificationAutomatic,
    (notification_automatic) => notification_automatic.customer,
  )
  notification_automatic: NotificationAutomatic[];

  @OneToMany(
    () => NotificationReads,
    (notification_reads) => notification_reads.customer,
  )
  notification_reads: NotificationReads[];

  @OneToMany(
    () => NotificationRemoves,
    (notification_removes) => notification_removes.customer,
  )
  notification_removes: NotificationRemoves[];

  @OneToMany(
    () => ResetPasswordTokenRequest,
    (reset_password_token_request) => reset_password_token_request.customer,
  )
  reset_password_token_request: ResetPasswordTokenRequest[];

  @OneToMany(() => Season, (season) => season.customer)
  season: Season[];

  @OneToMany(() => SharePlayer, (share_player) => share_player.customer)
  share_player: SharePlayer[];

  @OneToMany(() => Strategy, (strategy) => strategy.customer)
  strategy: Strategy[];

  @OneToMany(() => Suggestion, (suggestion) => suggestion.customer)
  suggestion: Suggestion[];

  @OneToMany(() => Support, (support) => support.customer)
  support: Support[];

  // Other relationships...

  // Indexes
}
