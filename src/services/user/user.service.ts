import { Injectable } from '@nestjs/common';
import { UserDto } from './../../interfaces/user/user.dto';
import { UserPostBody } from './../../validations/user/user.validation';

@Injectable()
export class UserService {

  async create(user: UserPostBody): Promise<UserDto> {
    return {
      id: '1',
      user_name: 'test'
    }
  }

  async getOne(id: string): Promise<UserDto> {
    return {
      id: '2',
      user_name: '张三'
    }
  }

}
