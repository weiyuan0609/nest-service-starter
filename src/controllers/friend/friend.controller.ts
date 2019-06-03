import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { ResultDto } from '../../interfaces/common/result.dto';
import { ApiResponse, ApiUseTags, ApiOperation, ApiBadRequestResponse, ApiImplicitParam } from '@nestjs/swagger';
import { LoggerService } from './../../services/common/logger/logger.service';

@ApiUseTags('friends')
@Controller('friend')
export class FriendController {
  constructor(
    private readonly loggerService: LoggerService
  ) { }

  @Get(':id')
  @ApiOperation({ title: '获取好友', description: '描述' })
  @ApiImplicitParam({ name: 'id', description: '用户id' })
  @ApiResponse({ status: 200, description: '成功', type: ResultDto })
  @ApiBadRequestResponse({ description: '请求错误' })
  async findFriend( @Param('id') id: string ): Promise<ResultDto> {
    try {
      this.loggerService.info('获取好友成功');
      return { message: '获取好友成功' };
    } catch (e) {
      this.loggerService.error('获取好友失败', e);
      throw new BadRequestException('获取好友失败');
    }
  }

}
