import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../base';
import { UserModel } from '../database';

@Injectable()
export class UserRepository extends BaseRepository {
  constructor() {
    super(UserModel);
  }
}
