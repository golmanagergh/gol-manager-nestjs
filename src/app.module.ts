import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
import { Country } from './entities/Country.entity';
import { Coupon } from './entities/Coupon.entity';
import { CouponCustomer } from './entities/CouponCustomer.entity';
import { Customer } from './entities/Customer.entity';
import { CustomerDevice } from './entities/CustomerDevice.entity';
import { CustomerFingerprint } from './entities/CustomerFingerprint.entity';
import { Difficulty } from './entities/Difficulty.entity';
import { DifficultyTranslation } from './entities/DifficultyTranslation.entity';
// import { DoctrineMigrationVersions } from './entities/DoctrineMigrationVersions.entity';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import axios from 'axios';
import { MemoryStore } from 'express-session';
import { join } from 'path';
import { ConvocatoriaPlayer } from './entities/ConvocatoriaPlayer.entity';
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
  // TT_list_season_player,
  TypeNotifications,
  TypeNotificationTranslation,
  TypeSoccer,
  User,
  Userr,
  YellowCards,
];

const mystore = new MemoryStore();

const myCustomTheme = {
  id: 'my-custom-theme',
  name: 'My Custom Theme',
  overrides: {
    colors: {
      primary100: 'teal',
    },
  },
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities,
      synchronize: true,
    }),
    // Use dynamic import for the AdminModule
    (async () => {
      const argon2 = (await import('argon2')).default;

      let axiosInstance = null;
      let cookiePassword = '';

      const authenticate = async (email: string, password: string) => {
        const allUsers = await User.findOneBy({ email: email });

        if (allUsers) {
          if (await argon2.verify(allUsers.password, password)) {
            return Promise.resolve({ email, password });
          }
        }
        return null;
      };

      const AdminJSS = await import('adminjs');
      const uploadFeature = (await import('@adminjs/upload')).default;
      const ComponentLoader = AdminJSS.ComponentLoader;
      const componentLoader = new ComponentLoader();

      const compo = {
        Dashboard: componentLoader.add('Dashboard', './dashboard'),
        ImageShow: componentLoader.add('ImageShow', './image-show'),
        Translation: componentLoader.add('Translation', './translation'),
        // other custom components
      };

      const { AdminModule } = await import('@adminjs/nestjs');
      const adminModule = AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            dashboard: {
              component: compo.Dashboard,
            },
            // defaultTheme: myCustomTheme.id,
            // availableThemes: [myCustomTheme],
            rootPath: '/admin',
            resources: [
              {
                resource: Customer,
                options: {
                  navigation: { icon: 'User' },
                  listProperties: [
                    'image',
                    'email',
                    'enabled',
                    'type_account',
                    'is_pro',
                  ],
                  showProperties: [
                    'name',
                    'surname',
                    'email',
                    'image',
                    'enabled',
                    'type_account',
                    'is_pro',
                  ],
                  editProperties: [
                    'name',
                    'surname',
                    'email',
                    'password',
                    'file',
                    'enabled',
                    'type_account',
                    'is_pro',
                  ],
                  filterProperties: [
                    'name',
                    'surname',
                    'email',
                    'enabled',
                    'type_account',
                    'is_pro',
                  ],
                  properties: {
                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                  },
                  actions: {
                    edit: {
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload?.password) {
                            request.payload.password = await argon2.hash(
                              request.payload.password,
                            );
                          } else {
                            delete request.payload?.password;
                          }
                        }
                        return request;
                      },
                      after: async (response) => {
                        response.record.params.password = '';
                        return response;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Customer',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: User,
                options: {
                  navigation: { icon: 'UserCheck' },
                  listProperties: ['name', 'email', 'celular', 'enabled'],
                  showProperties: ['name', 'email', 'celular', 'enabled'],
                  editProperties: [
                    'name',
                    'email',
                    'celular',
                    'enabled',
                    'password',
                  ],
                  filterProperties: ['name', 'email', 'celular', 'enabled'],
                  actions: {
                    edit: {
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload?.password) {
                            request.payload.password = await argon2.hash(
                              request.payload.password,
                            );
                          } else {
                            delete request.payload?.password;
                          }
                        }
                        return request;
                      },
                      after: async (response) => {
                        response.record.params.password = '';
                        return response;
                      },
                    },
                  },
                },
              },
              {
                resource: Coupon,
                options: {
                  navigation: { icon: 'Gift' },
                  properties: { nro_usos_activados: { isVisible: true } },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },

                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/CouponCustomer/actions/list?perPage=500&filters.coupon_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.nro_usos_activados =
                              data.records.length;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/CouponCustomer/actions/list?perPage=500&filters.coupon_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.nro_usos_activados =
                          data.records.length;

                        return response;
                      },
                    },
                  },
                  listProperties: [
                    'promo_code',
                    'expires_at',
                    'limit_uses',
                    'nro_usos_activados',
                    'created_at',
                    'updated_at',
                  ],
                  showProperties: [
                    'promo_code',
                    'expires_at',
                    'limit_uses',
                    'nro_usos_activados',
                    'created_at',
                    'updated_at',
                  ],
                  editProperties: ['promo_code', 'expires_at', 'limit_uses'],
                  filterProperties: ['promo_code', 'expires_at', 'limit_uses'],
                },
              },
              { resource: CouponCustomer, options: { navigation: false } },
              {
                resource: Category,
                options: {
                  navigation: { icon: 'Circle' },
                  properties: {
                    nombre: { isVisible: true },
                    descripcion: { isVisible: true },
                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  listProperties: ['image', 'nombre', 'descripcion'],
                  showProperties: ['nombre', 'image', 'is_visible'],
                  editProperties: ['translation', 'is_visible', 'file'],
                  filterProperties: ['is_visible'],
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.nombre = data.records[0].params.name;
                            record.params.descripcion =
                              data.records[0].params.description;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/CategoryTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.descripciones =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            desc: record.params.description,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            // const { data } = await axiosInstance.get(
                            //   '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            //     request.payload.id,
                            // );
                            // const translObject = data.records[0].params;
                            // const translId = translObject.id;
                            // delete translObject.id;
                            // translObject.name = request.payload.nombre;
                            // translObject.description =
                            //   request.payload.descripcion;
                            // await axiosInstance.post(
                            //   '/resources/CategoryTranslation/records/' +
                            //     translId +
                            //     '/edit',
                            //   translObject,
                            // );

                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');
                            const descs = Object.keys(request.payload)
                              .filter((key) => key.startsWith('descripciones.'))
                              .reduce((acc, key) => {
                                const [, index, property] = key.match(
                                  /descripciones\.(\d+)\.(.+)/,
                                );
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', desc: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                    desc: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            (nombres.length < descs.length
                              ? descs
                              : nombres
                            ).forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/CategoryTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: nombres[index].name || '',
                                  description: descs[index].desc || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/CategoryTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  description: element.desc,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Category',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              { resource: CategoryTranslation, options: { navigation: false } },

              {
                resource: Material,
                options: {
                  listProperties: ['image', 'nombre'],
                  showProperties: ['nombre', 'image'],
                  editProperties: ['id', 'translation', 'file'],
                  properties: {
                    id: {
                      isDisabled: true,
                    },
                    nombre: {
                      isVisible: true,
                    },
                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  navigation: {
                    icon: 'Bell',
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/MaterialTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.nombre = data.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/MaterialTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        return response;
                      },
                    },

                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/MaterialTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/MaterialTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            nombres.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/MaterialTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: element.name || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/MaterialTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Material',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },

              {
                resource: MaterialTranslation,
                options: { navigation: false, icon: 'Bell' },
              },
              {
                resource: Exercise,
                options: {
                  navigation: { name: 'ENTRENAMIENTOS', icon: 'Bell' },
                  properties: {
                    nombre: { isVisible: true },
                    descripcion: { isVisible: true },
                    categoria: { isVisible: true },
                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  listProperties: [
                    'image',
                    'nombre',
                    'categoria',
                    'duration',
                    'dificulty',
                    'intensity',
                  ],
                  showProperties: [
                    'nombre',
                    'image',
                    'categoria',
                    'descripcion',
                    'duration',
                    'dificulty',
                    'intensity',
                  ],
                  editProperties: [
                    'translation',
                    'file',
                    'categoria',
                    'duration',
                    'dificulty',
                    'intensity',
                  ],
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/ExerciseTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );

                            let extractedRecords = data.records;
                            const promArray = Array.from({
                              length: Math.floor(data.meta.total / 500),
                            }).forEach(async (element, index) => {
                              if (extractedRecords.length !== 0) {
                                return;
                              }
                              const { data: newData } = await axiosInstance.get(
                                '/resources/ExerciseTranslation/actions/list?perPage=500&page=' +
                                  (index + 2) +
                                  '&filters.locale=es&filters.translatable_id=' +
                                  record.params.id,
                              );
                              extractedRecords = newData;
                            });

                            if (extractedRecords.length !== 0) {
                              record.params.nombre =
                                extractedRecords[0].params.name;
                              record.params.descripcion =
                                extractedRecords[0].params.description;
                            } else {
                              record.params.nombre = '';
                              record.params.descripcion = '';
                            }

                            // console.log(record.params.something = data.records.length);

                            const { data: categoryData } =
                              await axiosInstance.get(
                                '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                  record.params.category_id,
                              );
                            // console.log(record.params.something = data.records.length);
                            record.params.categoria =
                              categoryData.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/ExerciseTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );

                        let extractedRecords = data.records;
                        const promArray = Array.from({
                          length: Math.floor(data.meta.total / 500),
                        }).forEach(async (element, index) => {
                          if (extractedRecords.length !== 0) {
                            return;
                          }
                          const { data: newData } = await axiosInstance.get(
                            '/resources/ExerciseTranslation/actions/list?perPage=500&page=' +
                              (index + 2) +
                              '&filters.locale=es&filters.translatable_id=' +
                              response.record.params.id,
                          );
                          extractedRecords = newData;
                        });

                        if (extractedRecords.length !== 0) {
                          response.record.params.nombre =
                            extractedRecords[0].params.name;
                          response.record.params.descripcion =
                            extractedRecords[0].params.description;
                        } else {
                          response.record.params.nombre = '';
                          response.record.params.descripcion = '';
                        }

                        // console.log(record.params.something = data.records.length);

                        const { data: categoryData } = await axiosInstance.get(
                          '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.category_id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.categoria =
                          categoryData.records[0].params.name;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/ExerciseTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: categoryData } = await axiosInstance.get(
                          '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.category_id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.categoria =
                          categoryData.records[0].params.name;

                        let extractedRecords = data.records;
                        Array.from({
                          length: Math.floor(data.meta.total / 500),
                        }).forEach(async (element, index) => {
                          if (extractedRecords.length !== 0) {
                            return;
                          }
                          const { data: newData } = await axiosInstance.get(
                            '/resources/ExerciseTranslation/actions/list?perPage=500&page=' +
                              (index + 2) +
                              '&filters.locale=es&filters.translatable_id=' +
                              response.record.params.id,
                          );
                          extractedRecords = newData;
                        });

                        if (extractedRecords.length !== 0) {
                          response.record.params.nombre =
                            extractedRecords[0].params.name;
                          response.record.params.descripcion =
                            extractedRecords[0].params.description;
                        } else {
                          response.record.params.nombre = '';
                          response.record.params.descripcion = '';
                        }

                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/ExerciseTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.descripciones =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            desc: record.params.description,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');
                            const descs = Object.keys(request.payload)
                              .filter((key) => key.startsWith('descripciones.'))
                              .reduce((acc, key) => {
                                const [, index, property] = key.match(
                                  /descripciones\.(\d+)\.(.+)/,
                                );
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', desc: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                    desc: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            (nombres.length < descs.length
                              ? descs
                              : nombres
                            ).forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/ExerciseTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: nombres[index].name || '',
                                  description: descs[index].desc || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/ExerciseTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  description: element.desc,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Exercise',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              { resource: ExerciseTranslation, options: { navigation: false } },
              {
                resource: ExerciseUser,
                options: {
                  navigation: { name: 'ENTRENAMIENTOS' },
                  properties: {
                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                  },
                  listProperties: [
                    'image',
                    'title',
                    'description',
                    'duration',
                    'dificulty',
                    'intensity',
                    'user_id',
                  ],
                  showProperties: [
                    'image',
                    'title',
                    'description',
                    'duration',
                    'dificulty',
                    'intensity',
                    'user_id',
                  ],
                  editProperties: [
                    'file',
                    'title',
                    'description',
                    'duration',
                    'dificulty',
                    'intensity',
                    'user_id',
                  ],
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/ExerciseUser',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              // {resource: Shar,
              // options: {
              //   id: "ENTRENAMIENTOS USUARIOS",
              //   navigation: {name: "ENTRENAMIENTOS"}
              // }}
              {
                resource: Suggestion,
                options: {
                  navigation: { name: 'FEEDBACK', icon: 'Repeat' },
                  listProperties: ['created_at', 'customer_id', 'value'],
                  actions: {
                    edit: {
                      isAccessible: false,
                      isVisible: false,
                    },
                  },
                },
              },

              {
                resource: AppModuleEntity,
                options: {
                  navigation: { name: 'FEEDBACK' },
                  properties: {
                    id: { isVisible: false },
                    nombre: { isVisible: true },
                    created_at: { isDisabled: true },
                    updated_at: { isDisabled: true },

                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  listProperties: ['nombre', 'created_at'],
                  showProperties: ['nombre', 'created_at', 'updated_at'],
                  editProperties: ['translation', 'created_at', 'updated_at'],
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/AppModuleTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.nombre = data.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/AppModuleTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/AppModuleTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/AppModuleTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            nombres.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/AppModuleTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: element.name || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/AppModuleTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
              },

              {
                resource: AppModuleTranslation,
                options: { navigation: false },
              },
              {
                resource: Support,
                options: {
                  navigation: { name: 'FEEDBACK' },
                  listProperties: [
                    'modulo',
                    'description',
                    'cliente',
                    'version_app',
                    'device',
                    'is_resolved',
                  ],
                  showProperties: [
                    'version_app',
                    'device',
                    'description',
                    'modulo',
                    'cliente',
                    'is_resolved',
                  ],
                  editProperties: [
                    'version_app',
                    'device',
                    'description',
                    'is_resolved',
                    'app_module_id',
                  ],
                  properties: {
                    modulo: {
                      isVisble: true,
                    },
                    cliente: { isVisible: true },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/Customer/actions/list?perPage=500&filters.id=' +
                                record.params.customer_id,
                            );
                            const { data: dataAppModule } =
                              await axiosInstance.get(
                                '/resources/AppModuleTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                  record.params.app_module_id,
                              );
                            // console.log(record.params.something = data.records.length);
                            record.params.cliente = data.records[0].params.name;
                            record.params.modulo =
                              dataAppModule.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/Customer/actions/list?perPage=500&filters.id=' +
                            response.record.params.customer_id,
                        );
                        const { data: dataAppModule } = await axiosInstance.get(
                          '/resources/AppModuleTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.app_module_id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.cliente =
                          data.records[0].params.name;
                        response.record.params.modulo =
                          dataAppModule.records[0].params.name;

                        return response;
                      },
                    },
                  },
                },
              },
              { resource: SupportFile, options: { navigation: false } },
              {
                resource: Collaborator,
                options: {
                  navigation: { icon: 'UserCheck' },
                  listProperties: ['image', 'names', 'link', 'description'],
                  showProperties: ['names', 'link', 'description', 'image'],
                  editProperties: ['names', 'link', 'description', 'file'],
                  properties: {
                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Collaborator',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: Membership,
                options: {
                  navigation: { name: 'MEMBERSHIP', icon: 'Bell' },
                  listProperties: ['image', 'titulo', 'descripcion'],
                  showProperties: ['image', 'titulo', 'descripcion'],
                  editProperties: ['translation', 'file'],
                  properties: {
                    titulo: { isVisible: true },
                    descripcion: { isVisible: true },

                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/MembershipTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.titulo = data.records[0].params.title;
                            record.params.descripcion =
                              data.records[0].params.description;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/MembershipTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.titulo =
                          data.records[0].params.title;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/MembershipTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/MembershipTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.title;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.title,
                          }));

                        response.record.params.descripciones =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            desc: record.params.description,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');
                            const descs = Object.keys(request.payload)
                              .filter((key) => key.startsWith('descripciones.'))
                              .reduce((acc, key) => {
                                const [, index, property] = key.match(
                                  /descripciones\.(\d+)\.(.+)/,
                                );
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', desc: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                    desc: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            (nombres.length < descs.length
                              ? descs
                              : nombres
                            ).forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/MembershipTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: nombres[index].name || '',
                                  description: descs[index].desc || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/MembershipTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  description: element.desc,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Membership',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: MembershipTranslation,
                options: { navigation: false },
              },
              {
                resource: MembershipAttr,
                options: {
                  navigation: { name: 'MEMBERSHIP', icon: 'Bell' },
                  listProperties: [
                    'image',
                    'titulo',
                    'descripcion',
                    'membership_parent_id',
                  ],
                  showProperties: ['image', 'titulo', 'descripcion'],
                  editProperties: [
                    'translation',
                    'membership_parent_id',
                    'file',
                  ],
                  properties: {
                    titulo: { isVisible: true },
                    descripcion: { isVisible: true },

                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/MembershipAttrTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.titulo = data.records[0].params.title;
                            record.params.descripcion =
                              data.records[0].params.description;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/MembershipAttrTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.titulo =
                          data.records[0].params.title;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/MembershipAttrTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/MembershipAttrTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.title;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.title,
                          }));

                        response.record.params.descripciones =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            desc: record.params.description,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');
                            const descs = Object.keys(request.payload)
                              .filter((key) => key.startsWith('descripciones.'))
                              .reduce((acc, key) => {
                                const [, index, property] = key.match(
                                  /descripciones\.(\d+)\.(.+)/,
                                );
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', desc: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                    desc: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            (nombres.length < descs.length
                              ? descs
                              : nombres
                            ).forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/MembershipAttrTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: nombres[index].name || '',
                                  description: descs[index].desc || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/MembershipAttrTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  description: element.desc,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/MembershipAttr',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: MembershipAttrTranslation,
                options: { navigation: false },
              },
              {
                resource: MembershipDesc,
                options: {
                  navigation: { name: 'MEMBERSHIP' },
                  listProperties: ['image', 'titulo', 'descripcion'],
                  showProperties: ['titulo', 'descripcion', 'image'],
                  editProperties: ['translation', 'file'],
                  properties: {
                    titulo: { isVisible: true },
                    descripcion: { isVisible: true },

                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/MembershipDescTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.titulo = data.records[0].params.title;
                            record.params.descripcion =
                              data.records[0].params.description;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/MembershipDescTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.titulo =
                          data.records[0].params.title;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/MembershipDescTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/MembershipDescTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.title;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.title,
                          }));

                        response.record.params.descripciones =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            desc: record.params.description,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');
                            const descs = Object.keys(request.payload)
                              .filter((key) => key.startsWith('descripciones.'))
                              .reduce((acc, key) => {
                                const [, index, property] = key.match(
                                  /descripciones\.(\d+)\.(.+)/,
                                );
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', desc: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                    desc: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            (nombres.length < descs.length
                              ? descs
                              : nombres
                            ).forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/MembershipDescTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: nombres[index].name || '',
                                  description: descs[index].desc || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/MembershipDescTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  description: element.desc,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/MembershipDesc',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: MembershipDescTranslation,
                options: { navigation: false },
              },
              {
                resource: TypeNotifications,
                properties: {
                  key: {
                    type: 'string',
                  },
                  image: {
                    type: 'string',
                    components: {
                      list: compo.ImageShow,
                      show: compo.ImageShow,
                    },
                  },
                },
                options: {
                  navigation: { icon: 'Bell' },
                  listProperties: ['image', 'description'],
                  showProperties: ['description', 'image'],
                  editProperties: ['description', 'file'],
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/TypeNotifications',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: TypeNotificationTranslation,
                options: { navigation: false },
              },
              {
                resource: Notification,
                options: {
                  navigation: { name: 'NOTIFICACIONES', icon: 'Bell' },
                  listProperties: ['titulo', 'cuerpo', 'created_at'],
                  showProperties: ['titulo', 'cuerpo', 'created_at'],
                  editProperties: ['translation', 'type_notifications'],
                  properties: {
                    titulo: { isVisible: true },
                    cuerpo: { isVisible: true },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/NotificationTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.titulo = data.records[0].params.title;
                            record.params.cuerpo = data.records[0].params.body;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/NotificationTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.titulo =
                          data.records[0].params.title;
                        response.record.params.cuerpo =
                          data.records[0].params.body;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/NotificationTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/NotificationTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.title;
                        response.record.params.descripcion =
                          data.records[0].params.body;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.title,
                          }));

                        response.record.params.descripciones =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            desc: record.params.body,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');
                            const descs = Object.keys(request.payload)
                              .filter((key) => key.startsWith('descripciones.'))
                              .reduce((acc, key) => {
                                const [, index, property] = key.match(
                                  /descripciones\.(\d+)\.(.+)/,
                                );
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', desc: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                    desc: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            (nombres.length < descs.length
                              ? descs
                              : nombres
                            ).forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/NotificationTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: nombres[index].name || '',
                                  description: descs[index].desc || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/NotificationTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  description: element.desc,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
              },
              {
                resource: NotificationTranslation,
                options: { navigation: false },
              },
              {
                resource: NotificationAutomaticMessage,
                options: {
                  navigation: { name: 'NOTIFICACIONES' },
                  properties: {
                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                  },
                  listProperties: [
                    'title',
                    'singular_message',
                    'plural_message',
                    'image',
                  ],
                  showProperties: [
                    'title',
                    'singular_message',
                    'plural_message',
                    'type',
                    'image',
                  ],
                  editProperties: [
                    'title',
                    'singular_message',
                    'plural_message',
                    'file',
                    'type',
                  ],
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/NotificationAutomaticMessage',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: NotificationAutomaticTranslation,
                options: {
                  navigation: { name: 'NOTIFICACIONES' },
                  listProperties: [
                    'title',
                    'singular_message',
                    'plural_message',
                    'locale',
                  ],
                  showProperties: [
                    'title',
                    'singular_message',
                    'plural_message',
                    'locale',
                  ],
                  editProperties: [
                    'title',
                    'singular_message',
                    'plural_message',
                    'locale',
                  ],
                },
              },
              {
                resource: TypeSoccer,
                options: {
                  navigation: { name: 'JUEGOS', icon: 'Circle' },
                  listProperties: ['name', 'number_players', 'tactics'],
                  showProperties: ['name'],
                  editProperties: ['name', 'number_players'],
                  properties: { tactics: { isVisible: true } },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/Tactic/actions/list?perPage=500&filters.type_soccer_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.tactics = data.records.length;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                  },
                },
              },
              {
                resource: Tactic,
                options: {
                  navigation: { name: 'JUEGOS' },
                  listProperties: ['name', 'type_soccer_id'],
                  showProperties: ['name', 'type_soccer_id'],
                  editProperties: ['name', 'type_soccer_id'],
                },
              },
              {
                resource: Position,
                options: {
                  navigation: { name: 'JUEGOS' },
                  listProperties: ['image', 'nombre', 'slug', 'field_position'],
                  showProperties: ['nombre', 'slug', 'field_position', 'image'],
                  editProperties: [
                    'translation',
                    'slug',
                    'field_position',
                    'file',
                  ],
                  properties: {
                    nombre: { isVisible: true },

                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/PositionTranslation/actions/list?perPage=500&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.nombre = data.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/PositionTranslation/actions/list?perPage=500&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/PositionTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/PositionTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            nombres.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/PositionTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: element.name || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/PositionTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Position',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              { resource: PositionTranslation, options: { navigation: false } },
              {
                resource: Difficulty,
                options: {
                  navigation: { name: 'JUEGOS' },
                  listProperties: ['nombre', 'created_at'],
                  showProperties: ['nombre', 'created_at'],
                  editProperties: ['translation', 'file', 'created_at'],
                  properties: {
                    nombre: { isVisible: true },

                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },

                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/DifficultyTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.nombre = data.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/DifficultyTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/DifficultyTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/DifficultyTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            nombres.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/DifficultyTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: element.name || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/DifficultyTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Difficulty',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: DifficultyTranslation,
                options: { navigation: false },
              },
              {
                resource: JustificationType,
                options: {
                  navigation: { icon: 'List' },
                  listProperties: [
                    'icon',
                    'nombre',
                    'descripcion',
                    'nro_order',
                    'show_training',
                    'show_announcement',
                  ],
                  showProperties: ['nombre', 'descripcion', 'icon'],
                  editProperties: [
                    'translation',
                    'file',
                    'nro_order',
                    'show_training',
                    'show_announcement',
                  ],
                  properties: {
                    nombre: { isVisible: true },
                    descripcion: { isVisible: true },

                    key: {
                      type: 'string',
                    },
                    icon: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/JustificationTypeTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);
                            record.params.descripcion =
                              data.records[0].params.description;
                            record.params.nombre = data.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/JustificationTypeTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);
                        response.record.params.descripcion =
                          data.records[0].params.description;
                        response.record.params.nombre =
                          data.records[0].params.name;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/JustificationTypeTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/JustificationTypeTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.descripciones =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            desc: record.params.description,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            // const { data } = await axiosInstance.get(
                            //   '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            //     request.payload.id,
                            // );
                            // const translObject = data.records[0].params;
                            // const translId = translObject.id;
                            // delete translObject.id;
                            // translObject.name = request.payload.nombre;
                            // translObject.description =
                            //   request.payload.descripcion;
                            // await axiosInstance.post(
                            //   '/resources/CategoryTranslation/records/' +
                            //     translId +
                            //     '/edit',
                            //   translObject,
                            // );

                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');
                            const descs = Object.keys(request.payload)
                              .filter((key) => key.startsWith('descripciones.'))
                              .reduce((acc, key) => {
                                const [, index, property] = key.match(
                                  /descripciones\.(\d+)\.(.+)/,
                                );
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', desc: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                    desc: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            (nombres.length < descs.length
                              ? descs
                              : nombres
                            ).forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/JustificationTypeTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: nombres[index].name || '',
                                  description: descs[index].desc || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/JustificationTypeTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  description: element.desc,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'icon' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/JustificationType',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: JustificationTypeTranslation,
                options: {
                  navigation: false,
                },
              },
              {
                resource: Competition,
                options: {
                  navigation: { name: 'AJUSTES', icon: 'Settings' },
                  listProperties: ['nombre', 'image'],
                  showProperties: ['nombre', 'imagen'],
                  editProperties: ['translation', 'file', 'created_at'],
                  properties: {
                    nombre: { isVisible: true },

                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/CompetitionTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);

                            record.params.nombre = data.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/CompetitionTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);

                        response.record.params.nombre =
                          data.records[0].params.name;

                        return response;
                      },
                    },
                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/CompetitionTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/CompetitionTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;
                        response.record.params.descripcion =
                          data.records[0].params.description;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.descripciones =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            desc: record.params.description,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            // const { data } = await axiosInstance.get(
                            //   '/resources/CategoryTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            //     request.payload.id,
                            // );
                            // const translObject = data.records[0].params;
                            // const translId = translObject.id;
                            // delete translObject.id;
                            // translObject.name = request.payload.nombre;
                            // translObject.description =
                            //   request.payload.descripcion;
                            // await axiosInstance.post(
                            //   '/resources/CategoryTranslation/records/' +
                            //     translId +
                            //     '/edit',
                            //   translObject,
                            // );

                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');
                            const descs = Object.keys(request.payload)
                              .filter((key) => key.startsWith('descripciones.'))
                              .reduce((acc, key) => {
                                const [, index, property] = key.match(
                                  /descripciones\.(\d+)\.(.+)/,
                                );
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', desc: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                    desc: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            (nombres.length < descs.length
                              ? descs
                              : nombres
                            ).forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/CompetitionTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: nombres[index].name || '',
                                  description: descs[index].desc || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/CompetitionTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  description: element.desc,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Competition',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: CompetitionTranslation,
                options: { navigation: false },
              },
              {
                resource: Locality,
                options: {
                  navigation: { name: 'AJUSTES' },
                  listProperties: ['image', 'nombre'],
                  showProperties: ['nombre', 'image'],
                  editProperties: ['translation', 'file'],
                  properties: {
                    nombre: { isVisible: true },

                    key: {
                      type: 'string',
                    },
                    image: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                    translation: {
                      components: {
                        edit: compo.Translation,
                      },
                    },
                  },
                  actions: {
                    list: {
                      before: async (request) => {
                        cookiePassword = request.rawHeaders
                          .join('separator')
                          .split('golmanag=')[1]
                          .split('separator')[0];
                        axiosInstance = axios.create({
                          baseURL: process.env.DOMAIN + '/admin/api',
                          headers: { Cookie: `golmanag=${cookiePassword}` },
                          proxy: {
                            protocol: process.env.DOMAIN.split('://')[0],
                            host: process.env.DOMAIN.split('://')[1].split(
                              ':',
                            )[0],
                            port: parseInt(process.env.PORT) || 3000,
                          },
                        });
                        return request;
                      },
                      after: async (response) => {
                        const promiseArray = response.records.map(
                          async (record) => {
                            const { data } = await axiosInstance.get(
                              '/resources/LocalityTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                                record.params.id,
                            );
                            // console.log(record.params.something = data.records.length);

                            record.params.nombre = data.records[0].params.name;
                          },
                        );

                        await Promise.all(promiseArray);

                        return response;
                      },
                    },
                    show: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/LocalityTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        // console.log(record.params.something = data.records.length);

                        response.record.params.nombre =
                          data.records[0].params.name;

                        return response;
                      },
                    },

                    edit: {
                      after: async (response) => {
                        const { data } = await axiosInstance.get(
                          '/resources/LocalityTranslation/actions/list?perPage=500&filters.locale=es&filters.translatable_id=' +
                            response.record.params.id,
                        );
                        const { data: translationsData } =
                          await axiosInstance.get(
                            '/resources/LocalityTranslation/actions/list?perPage=500&filters.translatable_id=' +
                              response.record.params.id,
                          );

                        // console.log(record.params.something = data.records.length);
                        response.record.params.nombre =
                          data.records[0].params.name;

                        response.record.params.nombres =
                          translationsData.records.map((record) => ({
                            id: record.params.id,
                            locale: record.params.locale,
                            name: record.params.name,
                          }));

                        response.record.params.new = [];

                        return response;
                      },
                      before: async (request) => {
                        if (request.method === 'post') {
                          if (request.payload) {
                            const nombres = Object.keys(request.payload)
                              .filter((key) => key.startsWith('nombres.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/nombres\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = { id: '', locale: '', name: '' };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            const news = Object.keys(request.payload)
                              .filter((key) => key.startsWith('new.'))
                              .reduce((acc, key) => {
                                const [, index, property] =
                                  key.match(/new\.(\d+)\.(.+)/);
                                if (!acc[index]) {
                                  acc[index] = {
                                    name: '',
                                    locale: '',
                                  };
                                }
                                acc[index][property] = request.payload[key];
                                return acc;
                              }, [])
                              .filter((obj) => obj.id !== '');

                            nombres.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/LocalityTranslation/records/' +
                                  element.id +
                                  '/edit',
                                {
                                  name: element.name || '',
                                },
                              );
                            });

                            news.forEach(async (element, index) => {
                              await axiosInstance.post(
                                '/resources/LocalityTranslation/actions/new',
                                {
                                  translatable_id: request.payload.id,
                                  name: element.name,
                                  locale: element.locale,
                                },
                              );
                            });
                          }
                          request.payload.key =
                            request.payload.id + '/' + request.payload.image;
                        }

                        return request;
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'image' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Locality',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              { resource: LocalityTranslation, options: { navigation: false } },
              {
                resource: Country,
                options: {
                  navigation: { name: 'AJUSTES' },
                  listProperties: ['flag', 'name', 'code'],
                  showProperties: ['name', 'code', 'flag'],
                  editProperties: ['name', 'code', 'file'],
                  properties: {
                    key: {
                      type: 'string',
                    },
                    flag: {
                      type: 'string',
                      components: {
                        list: compo.ImageShow,
                        show: compo.ImageShow,
                      },
                    },
                  },
                },
                features: [
                  uploadFeature({
                    properties: { key: 'key', filename: 'flag' },
                    componentLoader,
                    provider: {
                      local: {
                        bucket: 'public/uploads/Country',
                        opts: {},
                      },
                    },
                    validation: {
                      mimeTypes: [
                        'image/png',
                        'image/webp',
                        'image/jpeg',
                        'image/jpeg',
                      ],
                    },
                  }),
                ],
              },
              {
                resource: Config,
                options: {
                  navigation: { name: 'AJUSTES' },
                  listProperties: [
                    'time_for_free',
                    'version',
                    'enable_ios',
                    'enable_android',
                  ],
                  showProperties: [
                    'time_for_free',
                    'version',
                    'enable_ios',
                    'enable_android',
                  ],
                  editProperties: [
                    'time_for_free',
                    'version',
                    'enable_ios',
                    'enable_android',
                  ],
                  actions: {
                    new: {
                      isAccessible: false,
                      isVisible: false,
                    },
                  },
                },
              },
            ],
            branding: {
              companyName: 'Gol Manager',
              logo: process.env.DOMAIN + '/golmanagerlogo.jpeg',
              withMadeWithLove: false,
            },
            locale: {
              language: 'es',
              availableLanguages: ['es'],
              translations: {
                es: {
                  labels: {
                    TypeSoccer: 'TIPO DE FUTBOL',
                    Category: 'CATEGORIAS ENTRENAMIENTO',
                    Customer: 'CLIENTES',
                    Material: 'MATERIALES ENTRENAMIENTO',
                    Country: 'PAÍS',
                    Config: 'CONFIGURACIÓN',
                    Locality: 'LOCALIDAD',
                    Competition: 'COMPETICIÓN',
                    Difficulty: 'DIFICULTAD',
                    JustificationType: 'TIPO DE JUSTIFICACIÓN',
                    Position: 'POSICIÓN',
                    Tactic: 'TÁCTICAS',
                    NotificationAutomaticTranslation: 'TRANSLATION',
                    Coupon: 'CUPONES',
                    Exercise: 'ENTRENAMIENTOS',
                    Suggestion: 'SUGERENCIAS',
                    AppModuleEntity: 'MÓDULOS APP',
                    Support: 'SOPORTE',
                    Membership: 'MEMBRESIA 01',
                    MembershipAttr: 'MEMBRESIA 02',
                    MembershipDesc: 'MEMBRESIA-DESC',
                    TypeNotifications: 'TIPO DE NOTIFICACIONES',
                    Notification: 'GENERALES',
                    NotificationAutomaticMessage: 'AUTOMÁTICAS',
                    ExerciseUser: 'ENTRENAMIENTOS USUARIOS',
                    Collaborator: 'COLABORADORES',
                    User: 'ADMINISTRADORES',
                  },
                  properties: {
                    // name: 'Nombre',
                    // description: 'Descripción',
                    image: 'Imagen',
                    enabled: 'Habilitado',
                    promo_code: 'Código Promocional',
                    expires_at: 'Expira en',
                    limit_uses: 'Nro Usos Límite',
                    created_at: 'Creado en',
                    updated_at: 'Editado en',
                    type_account: 'Tipo de cuenta',
                    is_pro: 'Pro',
                    duration: 'Duración',
                    intensity: 'Intensidad',
                    user_id: 'Cliente',
                    customer_id: 'Cliente',
                    value: 'Valor',
                    version_app: 'Versión',
                    device: 'Dispositivo',
                    is_resolved: 'Solucionado',
                    names: 'Nombre',
                    link: 'Enlace',
                    membership_parent_id: 'ID Membresía',
                    singular_message: 'Mensaje en singular',
                    plural_message: 'Mensaje en plural',
                    locale: 'Idioma',
                    title: 'Título',
                    number_players: 'Número de jugadores',
                    tactics: 'Tácticas',
                    type_soccer_id: 'ID Tipo de juego',
                    slug: 'Tipo',
                    field_position: 'Posición en el campo',
                    icon: 'Icono',
                    nro_order: 'Nro Orden',
                    show_training: 'Mostrar entrenamiento',
                    show_announcement: 'Mostrar convocatoria',
                    flag: 'Bandera',
                    code: 'Código',
                    time_for_free: 'Tiempo gratis',
                    version: 'Versión',
                    enable_ios: 'Permitir iOS',
                    enable_android: 'Permitir Android',
                  },
                  buttons: {
                    save: 'Actualizar',
                  },
                  actions: {
                    show: 'Mostrar',
                  },
                  components: {
                    Login: {
                      welcomeHeader: 'Panel administrativo - Gol Manager',
                      welcomeMessage:
                        'Bienvenido al panel administrativo de Gol Manager. Inicia la sesión para continuar.',
                      properties: {
                        email: 'Email',
                        password: 'Contraseña',
                      },
                      loginButton: 'Iniciar sesión',
                    },
                  },
                },
              },
            },
            componentLoader,
            // {resource: , options: {id: ""}}],
          },
          auth: {
            authenticate,
            cookieName: 'golmanag',
            cookiePassword: 'a',
          },
          sessionOptions: {
            secret: 'a',
            resave: true,
            saveUninitialized: true,
          },
        }),
      });

      const { Resource, Database } = await import('@adminjs/typeorm');
      const AdminJS = (await import('adminjs')).default;
      AdminJS.registerAdapter({
        Resource,
        Database,
      });

      return adminModule;
    })(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
