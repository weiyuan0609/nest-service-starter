import { Controller, Delete, Put, Get, Post, Body, Param, BadRequestException } from '@nestjs/common';
import { ResultDto } from '../../interfaces/common/result.dto';
import { UserPostBody } from '../../validations/user/user.validation';
import { UserService } from '../../services/user/user.service';
import { ApiResponse, ApiUseTags, ApiOperation, ApiBadRequestResponse, ApiImplicitParam } from '@nestjs/swagger';
import { LoggerService } from './../../services/common/logger/logger.service';
import { UserNotExistException } from './../../exceptions/user/userNotExist.exception';

/**
 * 注意：
 * 1. swagger response model 展示 如右实现：   @ApiResponse({ type: ResultDto })
 */
@ApiUseTags('users')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly loggerService: LoggerService
  ) { }

  @Post()
  @ApiOperation({ title: '创建用户' })
  @ApiResponse({ status: 200,description: '成功', type: ResultDto })
  @ApiResponse({ status: 403, description: 'Forbidden.', type: ResultDto})
  async createUser( @Body() body: UserPostBody ): Promise<ResultDto> {
    try{
      if (body.id === 'dd') {
        this.loggerService.info('tst');
      }
      const data = await this.userService.create(body);
      this.loggerService.info('创建用户成功', data);
      return { code: 200, message: '创建成功', data };
    } catch (e) {
      this.loggerService.error('创建用户失败', e);
      throw new BadRequestException('创建用户失败');
    }
  }

  @Get(':id')
  @ApiOperation({ title: '获取指定用户', description: '描述' })
  @ApiImplicitParam({ name: 'id', description: '用户id' })
  @ApiResponse({ status: 200, description: '成功', type: ResultDto })
  @ApiBadRequestResponse({ description: '请求错误' })
  async findUser( @Param('id') id: string ): Promise<ResultDto> {
    try {
      const data = await this.userService.getOne(id);
      if (id === '0') {
        throw new UserNotExistException();
      }
      this.loggerService.info('获取用户信息成功', data);
      return { code: 200, message: '获取用户信息成功', data };
    } catch (e) {
      this.loggerService.error('获取用户信息失败', e);
      throw new BadRequestException('获取用户失败');
    }
  }

  @Put(':id')
  @ApiOperation({ title: '修改指定用户' })
  @ApiImplicitParam({ name: 'id', description: '用户id' })
  @ApiResponse({ status: 200, description: '成功', type: ResultDto })
  @ApiBadRequestResponse({ description: '请求错误' })
  async updateUser(@Param('id') id: string): Promise<ResultDto> {
    try {
      this.loggerService.info('修改用户成功', id);
      return { message: '修改用户成功' };
    } catch (e) {
      this.loggerService.error('修改用户失败', e);
      throw new BadRequestException('修改用户失败');
    }
  }

  @Delete(':id')
  @ApiOperation({ title: '修改指定用户' })
  @ApiImplicitParam({ name: 'id', description: '用户id' })
  @ApiResponse({ status: 200, description: '成功', type: ResultDto })
  @ApiBadRequestResponse({ description: '请求错误' })
  async deleteUser(@Param('id') id: string): Promise<ResultDto> {
    try {
      this.loggerService.info('删除用户成功', id);
      return { message: '删除用户成功' };
    } catch (e) {
      this.loggerService.error('删除用户失败', e);
      throw new BadRequestException('删除用户失败');
    }
  }
}
