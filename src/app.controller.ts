import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseService } from './base';

@Controller()
export class AppController {
  @Inject(BaseService)
  private readonly baseService: BaseService;
  @Inject(AppService)
  private readonly appService: AppService

  @Get()
  getHello(): any {
    const serverMessage = this.appService.getServerMessage();

    return this.baseService.transformResponse(serverMessage);
  }
}
