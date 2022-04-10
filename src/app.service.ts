import { Injectable } from '@nestjs/common';
import { ValidationError } from 'objection';

@Injectable()
export class AppService {
  getServerMessage(): string {
    return 'Account Service is up and running!';
  }
}
