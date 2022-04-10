import { Module } from '@nestjs/common';
import { EnvironmentService } from './env.service';
import { Env } from './env.token';

@Module({
  providers: [{
    provide: Env.Token,
    useValue: EnvironmentService,
  }],
  exports: [{
    provide: Env.Token,
    useValue: EnvironmentService,
  }],
})
export class EnvironmentsModule {}
