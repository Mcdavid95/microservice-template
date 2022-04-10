import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseService } from './base';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, BaseService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('App Controller Test', () => {
    it('should return server readiness message', () => {
      expect(appController.getHello()).toEqual({
        'message': 'Account Service is up and running!',
        'statusCode': 200,
        'data': {},
      });
    });
  });
});
