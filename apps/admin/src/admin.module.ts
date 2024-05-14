import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { ConfigModule } from '@nestjs/config';
import { SendEmailModule } from '@app/send-email';
import { JwtAuthenticationModule } from '@app/jwt-authentication';
import { ConfigService } from '@nestjs/config';
import { IConfig } from 'apps/config/config';
import { IConfigAuth } from 'apps/config/config';
import config from 'apps/config/config';
import { validateConfig } from 'apps/config/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => config],
      validate: validateConfig,
    }),
    JwtAuthenticationModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService<IConfig, true>) => ({
        ...configService.get<IConfigAuth>('auth'),
      }),
      inject: [ConfigService],
    }),
    JwtAuthenticationModule,
    SendEmailModule,
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
