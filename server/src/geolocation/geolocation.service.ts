import { Injectable } from '@nestjs/common';
import axios from 'axios';
import config from 'src/globals/enviroments';
import { PrismaService } from '../database/prisma.service';
import { AddressService } from '../address/address.service';

@Injectable()
export class GeolocationService {
  constructor(
    private prisma: PrismaService,
    private addressService: AddressService,
  ) {}

  async getGeolocation(address: string) {
    const existingAddress = await this.addressService.checkAddress(address);

    if (existingAddress) {
      console.log('address already exists!');
      return {
        address,
        geolocation: { lat: existingAddress.lat, lng: existingAddress.lng },
        source: 'database',
      };
    }

    console.log('fethcing address!');
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address,
    )}&key=${config().api.opencage}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        await this.addressService.addAddress(address, lng, lat);
        return { address, geolocation: { lat, lng } };
      } else {
        return { error: 'No geolocation found for this address.' };
      }
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch geolocation data');
    }
  }
}
