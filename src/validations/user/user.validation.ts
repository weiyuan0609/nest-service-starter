import {
  IsEnum,
  IsIn,
  IsInt,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString
} from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { SOURCE_ENUM } from '../../constants/user.constants';

/**
 * 注意：
 * 1. swagger ApiModelProperty 默认是必传 { required： true }
 */
export class UserPostBody {
  @ApiModelProperty({ description: '用户id' })
  @IsNumberString()
  public readonly id: string;

  @ApiModelPropertyOptional({ description: '用户名称' })
  @IsString()
  @IsOptional()
  public readonly user_name: string;

  @ApiModelProperty({ required: false, description: '性别' })
  @IsIn(['MAN', 'WOMAN'])
  @IsOptional()
  public readonly sex: string;

  @ApiModelProperty({ required: false, description: '年龄' })
  @IsInt()
  @IsOptional()
  public readonly age: number;

  @ApiModelProperty({ required: false, description: '金额' })
  @IsNumber()
  @IsOptional()
  public readonly money: number;

  @ApiModelProperty({ required: false, description: '来源', enum: ['ios', 'android'] })
  @IsEnum(SOURCE_ENUM)
  @IsOptional()
  public readonly source: string;

}
