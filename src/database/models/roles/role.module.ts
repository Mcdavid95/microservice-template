import { Module } from '@nestjs/common';
import { RoleModel } from './role.service';

@Module({
  providers: [RoleModel],
  exports: [RoleModel],
})
export class DbRoleModule {}
