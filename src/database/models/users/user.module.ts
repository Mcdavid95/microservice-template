import { Module } from '@nestjs/common';
import { UserModel } from './user.service';

@Module({
  providers: [UserModel],
  exports: [UserModel],
})
export class DbUserModule {}
