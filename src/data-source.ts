import { DataSource } from 'typeorm';
import { AppModuleEntity } from './entities/AppModule.entity';
import { AppModuleTranslation } from './entities/AppModuleTranslation.entity';
import { Category } from './entities/Category.entity';
import { CategoryTranslation } from './entities/CategoryTranslation.entity';
import { ClubMonthlyPayments } from './entities/ClubMonthlyPayments.entity';
import { Collaborator } from './entities/Collaborator.entity';
import { Competition } from './entities/Competition.entity';
import { CompetitionTranslation } from './entities/CompetitionTranslation.entity';
import { Config } from './entities/Config.entity';
import { Convocatoria } from './entities/Convocatoria.entity';
import { ConvocatoriaPlayer } from './entities/ConvocatoriaPlayer.entity';
import { Country } from './entities/Country.entity';
import { Coupon } from './entities/Coupon.entity';
import { CouponCustomer } from './entities/CouponCustomer.entity';
import { Customer } from './entities/Customer.entity';
import { CustomerDevice } from './entities/CustomerDevice.entity';
import { CustomerFingerprint } from './entities/CustomerFingerprint.entity';
import { Difficulty } from './entities/Difficulty.entity';
import { DifficultyTranslation } from './entities/DifficultyTranslation.entity';
import { Document } from './entities/Document.entity';
import { Exercise } from './entities/Exercise.entity';
import { ExerciseCalendar } from './entities/ExerciseCalendar.entity';
import { ExerciseMaterial } from './entities/ExerciseMaterial.entity';
import { ExerciseQualification } from './entities/ExerciseQualification.entity';
import { ExerciseTranslation } from './entities/ExerciseTranslation.entity';
import { ExerciseUser } from './entities/ExerciseUser.entity';
import { ExerciseUserMaterial } from './entities/ExerciseUserMaterial.entity';
import { Game } from './entities/Game.entity';
import { GameAlignment } from './entities/GameAlignment.entity';
import { GamePlayerStatistics } from './entities/GamePlayerStatistics.entity';
import { GoalAssistances } from './entities/GoalAssistances.entity';
import { Goals } from './entities/Goals.entity';
import { JustificationType } from './entities/JustificationType.entity';
import { JustificationTypeTranslation } from './entities/JustificationTypeTranslation.entity';
import { KilometersTraveled } from './entities/KilometersTraveled.entity';
import { KitPayments } from './entities/KitPayments.entity';
import { Locality } from './entities/Locality.entity';
import { LocalityTranslation } from './entities/LocalityTranslation.entity';
import { Material } from './entities/Material.entity';
import { MaterialTranslation } from './entities/MaterialTranslation.entity';
import { MediaGame } from './entities/MediaGame.entity';
import { Membership } from './entities/Membership.entity';
import { MembershipAttr } from './entities/MembershipAttr.entity';
import { MembershipAttrTranslation } from './entities/MembershipAttrTranslation.entity';
import { MembershipDesc } from './entities/MembershipDesc.entity';
import { MembershipDescTranslation } from './entities/MembershipDescTranslation.entity';
import { MembershipTranslation } from './entities/MembershipTranslation.entity';
import { MigrationVersions } from './entities/MigrationVersions.entity';
import { Minutes } from './entities/Minutes.entity';
import { NoteCalendar } from './entities/NoteCalendar.entity';
import { NoteExercise } from './entities/NoteExercise.entity';
import { NoteGame } from './entities/NoteGame.entity';
import { NotePlayer } from './entities/NotePlayer.entity';
import { Notification } from './entities/Notification.entity';
import { NotificationAutomatic } from './entities/NotificationAutomatic.entity';
import { NotificationAutomaticMessage } from './entities/NotificationAutomaticMessage.entity';
import { NotificationAutomaticTranslation } from './entities/NotificationAutomaticTranslation.entity';
import { NotificationReads } from './entities/NotificationReads.entity';
import { NotificationRemoves } from './entities/NotificationRemoves.entity';
import { NotificationTranslation } from './entities/NotificationTranslation.entity';
import { OtherPayments } from './entities/OtherPayments.entity';
import { Player } from './entities/Player.entity';
import { PlayerJustification } from './entities/PlayerJustification.entity';
import { PlayerSportsInjuries } from './entities/PlayerSportsInjuries.entity';
import { PlayerWeight } from './entities/PlayerWeight.entity';
import { Position } from './entities/Position.entity';
import { PositionTranslation } from './entities/PositionTranslation.entity';
import { RedCards } from './entities/RedCards.entity';
import { RefreshTokens } from './entities/RefreshTokens.entity';
import { ResetPasswordRequest } from './entities/ResetPasswordRequest.entity';
import { ResetPasswordTokenRequest } from './entities/ResetPasswordTokenRequest.entity';
import { Season } from './entities/Season.entity';
import { SeasonPlayer } from './entities/SeasonPlayer.entity';
import { SharePlayer } from './entities/SharePlayer.entity';
import { ShotsOnGoal } from './entities/ShotsOnGoal.entity';
import { Strategy } from './entities/Strategy.entity';
import { Suggestion } from './entities/Suggestion.entity';
import { Support } from './entities/Support.entity';
import { SupportFile } from './entities/SupportFile.entity';
import { TT_list_season_player } from './entities/TT_list_season_player.entity';
import { Tactic } from './entities/Tactic.entity';
import { Team } from './entities/Team.entity';
import { Titulars } from './entities/Titulars.entity';
import { TrainingAsist } from './entities/TrainingAsist.entity';
import { TrainingAsistPlayer } from './entities/TrainingAsistPlayer.entity';
import { TypeNotificationTranslation } from './entities/TypeNotificationTranslation.entity';
import { TypeNotifications } from './entities/TypeNotifications.entity';
import { TypeSoccer } from './entities/TypeSoccer.entity';
import { User } from './entities/User.entity';
import { Userr } from './entities/Userr.entity';
import { YellowCards } from './entities/YellowCards.entity';
// import { User } from './entities/Users.entity';
// import { User } from './test/User.entity';
const entities = [
  AppModuleEntity,
  AppModuleTranslation,
  Category,
  CategoryTranslation,
  ClubMonthlyPayments,
  Collaborator,
  Competition,
  CompetitionTranslation,
  Config,
  Convocatoria,
  ConvocatoriaPlayer,
  Country,
  Coupon,
  CouponCustomer,
  Customer,
  CustomerDevice,
  CustomerFingerprint,
  Difficulty,
  DifficultyTranslation,
  // DoctrineMigrationVersions,
  Document,
  Exercise,
  ExerciseCalendar,
  ExerciseMaterial,
  ExerciseQualification,
  ExerciseTranslation,
  ExerciseUser,
  ExerciseUserMaterial,
  Game,
  GameAlignment,
  GamePlayerStatistics,
  GoalAssistances,
  Goals,
  JustificationType,
  JustificationTypeTranslation,
  KilometersTraveled,
  KitPayments,
  Locality,
  LocalityTranslation,
  Material,
  MaterialTranslation,
  MediaGame,
  Membership,
  MembershipAttr,
  MembershipAttrTranslation,
  MembershipDesc,
  MembershipDescTranslation,
  MembershipTranslation,
  MigrationVersions,
  Minutes,
  NoteCalendar,
  NoteExercise,
  NoteGame,
  NotePlayer,
  Notification,
  NotificationAutomatic,
  NotificationAutomaticMessage,
  NotificationAutomaticTranslation,
  NotificationReads,
  NotificationRemoves,
  NotificationTranslation,
  OtherPayments,
  Player,
  PlayerJustification,
  PlayerSportsInjuries,
  PlayerWeight,
  Position,
  PositionTranslation,
  RedCards,
  RefreshTokens,
  ResetPasswordRequest,
  ResetPasswordTokenRequest,
  Season,
  SeasonPlayer,
  SharePlayer,
  ShotsOnGoal,
  Strategy,
  Suggestion,
  Support,
  SupportFile,
  Tactic,
  Team,
  Titulars,
  TrainingAsist,
  TrainingAsistPlayer,
  TT_list_season_player,
  TypeNotifications,
  TypeNotificationTranslation,
  TypeSoccer,
  User,
  Userr,
  YellowCards,
];

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: entities,
  subscribers: [],
  migrations: [],
});
