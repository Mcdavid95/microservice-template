import { Test, TestingModule } from '@nestjs/testing';
import { AddressModule, AddressRepository } from '../address';
import { UtilModule } from '../utils';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UtilModule, AddressModule],
      providers: [UserService, UserRepository],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
