import { Controller, Get, Query } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { AddressService } from '../address/address.service';

@Controller('geolocation')
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {}

  @Get()
  async getGeolocation(@Query('address') address: string) {
    if (!address) {
      return { error: 'Please provide an address.' };
    }
    return this.geolocationService.getGeolocation(address);
  }
}
