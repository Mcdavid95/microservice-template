import { HttpStatus, Injectable } from '@nestjs/common';
import { TransformResponse } from './base.interface';

@Injectable()
export class BaseService {
  public transformResponse(message: string, data: any = {}, statusCode: number = HttpStatus.OK): TransformResponse {
    return {
      statusCode,
      message,
      data,
    };
  }
}
