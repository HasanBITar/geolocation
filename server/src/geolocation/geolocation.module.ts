// src/geolocation/geolocation.module.ts
import { Module } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { GeolocationController } from './geolocation.controller';
import { PrismaModule } from '../database/prisma.module'; // Import PrismaModule
import { AddressModule } from '../address/address.module'; // Import AddressModule

@Module({
  imports: [PrismaModule, AddressModule], // Import AddressModule here
  controllers: [GeolocationController],
  providers: [GeolocationService],
})
export class GeolocationModule {}
