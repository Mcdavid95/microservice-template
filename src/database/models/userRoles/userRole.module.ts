import { Module } from '@nestjs/common';
import { UserRoleModel } from './userRole.service';

@Module({
  providers: [UserRoleModel],
  exports: [UserRoleModel],
})
export class DbUserRoleModule {}
