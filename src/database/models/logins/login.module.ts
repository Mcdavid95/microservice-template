import { Module } from '@nestjs/common';
import { LoginModel } from './login.service';

@Module({
  providers: [LoginModel],
  exports: [LoginModel],
})
export class DbLoginModule {}
