import { Module } from '@nestjs/common';
import { PermissionModel } from './permission.service';

@Module({
  providers: [PermissionModel],
  exports: [PermissionModel],
})
export class DbPermissionModule {}
