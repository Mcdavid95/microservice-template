import { Module } from '@nestjs/common';
import { AddressModule } from '../address';
import { UtilModule } from '../utils';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UserController } from './user.controller';

@Module({
  imports: [UtilModule, AddressModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
