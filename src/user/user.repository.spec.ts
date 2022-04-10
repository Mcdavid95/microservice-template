import { Test, TestingModule } from '@nestjs/testing';
import { BaseRepository } from '../base';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
  let userRepo: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRepository],
    }).compile();

    userRepo = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(userRepo).toBeDefined();
  });

  it('should extend BaseRepository', () => {
    expect(userRepo instanceof  BaseRepository).toBeTruthy();
  });
});
