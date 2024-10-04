import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  async checkAddress(address: string) {
    const existingAddress = await this.prisma.address.findUnique({
      where: { address },
      select: { lng: true, lat: true },
    });

    return existingAddress || null;
  }

  async addAddress(address: string, lng: number, lat: number) {
    const newAddress = await this.prisma.address.create({
      data: { address, lng, lat },
    });

    return newAddress;
  }
}
