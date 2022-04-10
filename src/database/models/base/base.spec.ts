import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'objection';
import { BaseModel } from './base.service';

describe('BaseModel', () => {
  let baseModel: BaseModel;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [BaseModel],
    }).compile();

    baseModel = app.get<BaseModel>(BaseModel);
  });

  describe('root', () => {
    it('should return be define', () => {
      expect(baseModel).toBeDefined();
    });

    it('should be an instance of Objection Model class', () => {
      expect(baseModel instanceof Model).toBeTruthy();
    });
  });
});
