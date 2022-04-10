import { Global, Module } from '@nestjs/common';
import { EnvironmentsModule } from './environments';

@Global()
@Module({
  imports: [EnvironmentsModule],
})
export class ConfigsModule {}
