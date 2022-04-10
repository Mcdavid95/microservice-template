import { Module } from '@nestjs/common';
import { PasswordResetModel } from './passwordReset.service';

@Module({
  providers: [PasswordResetModel] ,
  exports: [PasswordResetModel] ,
})
export class DbPasswordResetModule {}
