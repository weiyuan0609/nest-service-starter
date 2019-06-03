import {
  IsNumber,
  IsString
} from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class ResultDto {
  @ApiModelPropertyOptional()
  @IsNumber()
  public readonly code?: number;

  @ApiModelPropertyOptional()
  @IsString()
  public readonly message?: string;

  @ApiModelPropertyOptional()
  public readonly data?: any;
}