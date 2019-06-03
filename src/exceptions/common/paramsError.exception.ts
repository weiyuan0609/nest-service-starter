import { HttpException, HttpStatus } from '@nestjs/common';
import { createHttpExceptionBody } from '@nestjs/common/utils/http-exception-body.util';

export class ParamsErrorException extends HttpException {
  constructor() {
    super(
      createHttpExceptionBody(
        '参数错误',
        'PARAMS_ERROR_EXCEPTION',
        HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST
    );
  }
}