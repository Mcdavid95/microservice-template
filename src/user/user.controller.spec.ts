import { Test, TestingModule } from '@nestjs/testing';
import { AddressModule } from '../address';
import { BaseService } from '../base';
import { UtilModule } from '../utils';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilModule, AddressModule],
      controllers: [UserController],
      providers: [BaseService, UserService, UserRepository],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
