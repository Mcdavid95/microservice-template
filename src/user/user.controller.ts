import { Controller, Post, Body, HttpStatus, Inject } from '@nestjs/common';
import { BaseService } from '../base';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('users')
export class UserController {
  @Inject(UserService)
  private readonly userService: UserService;
  @Inject(BaseService)
  private readonly baseService: BaseService;

  @Post('/')
  public async create(@Body() data: CreateUserDto) {
    const newUser = await this.userService.create(data);

    return this.baseService.transformResponse('User created successfully', newUser, HttpStatus.CREATED);
  }
}
