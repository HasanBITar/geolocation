import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
