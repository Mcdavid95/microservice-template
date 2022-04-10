import { Module } from '@nestjs/common';
import { RolePermissionModel } from './rolePermission.service';

@Module({
  providers: [RolePermissionModel],
  exports: [RolePermissionModel],
})
export class DbRolePermissionModule {}
