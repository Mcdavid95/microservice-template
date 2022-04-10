import { Module } from '@nestjs/common';
import { BaseModel } from './base.service';

@Module({
  providers: [BaseModel],
  exports: [BaseModel],
})
export class DbBaseModelModule {}
