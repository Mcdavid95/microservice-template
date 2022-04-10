import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { ConfigsModule } from './configs';
import { BaseModule } from './base';
import { UserModule } from './user';
import { UtilModule } from './utils';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigsModule,
    BaseModule,
    UserModule,
    UtilModule,
    AddressModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
