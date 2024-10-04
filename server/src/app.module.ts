// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './globals/enviroments';
import { GeolocationModule } from './geolocation/geolocation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
      load: [configuration],
    }),
    GeolocationModule, // Import your GeolocationModule
  ],
})
export class AppModule {}
