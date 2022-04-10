import { Module } from '@nestjs/common';
import { AddressModel } from './address.service';

@Module({
  providers: [AddressModel],
  exports: [AddressModel],
})
export class DbAddressModule {}
