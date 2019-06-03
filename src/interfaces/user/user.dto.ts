import {
  IsEnum,
  IsIn,
  IsInt,
  IsNumber,
  IsNumberString,
  IsString
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { SOURCE_ENUM } from '../../constants/user.constants';

export class UserDto {
  @ApiModelProperty()
  @IsNumberString()
  public readonly id: string;

  @ApiModelProperty()
  @IsString()
  public readonly user_name: string;

  @ApiModelProperty()
  @IsIn(['MAN', 'WOMAN'])
  public readonly sex?: string;

  @ApiModelProperty()
  @IsInt()
  public readonly age?: number;

  @ApiModelProperty()
  @IsNumber()
  public readonly money?: number;

  @ApiModelProperty()
  @IsEnum(SOURCE_ENUM)
  public readonly source?: string;
}