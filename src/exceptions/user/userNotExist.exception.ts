import { HttpException, HttpStatus } from '@nestjs/common';
import { createHttpExceptionBody } from '@nestjs/common/utils/http-exception-body.util';

/**
 * 自定义异常
 */
export class UserNotExistException extends HttpException {
  constructor() {
    super(
      createHttpExceptionBody(
        'user不存在',
        'USER_NOT_EXISTS_EXCEPTION',
        HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST
    );
  }
}
