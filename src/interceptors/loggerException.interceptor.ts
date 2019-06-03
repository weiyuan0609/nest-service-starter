import {
  ExecutionContext,
  Injectable,
  NestInterceptor,
  CallHandler
} from '@nestjs/common';
import chalk from 'chalk';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoggerService } from './../services/common/logger/logger.service';

@Injectable()
export class LoggerExceptionInterceptor implements NestInterceptor {
  constructor(
    private loggerService: LoggerService
  ) {}

  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    const req = context.switchToHttp().getRequest();
    const requestIP = req.headers['X-Real-IP'] || req.ip || '0.0.0.0';
    const requestUrl = req.originalUrl;
    const requestMethod = req.method;
    const requestHeaders = JSON.stringify(req.headers);
    const requestQuery = JSON.stringify(req.query);
    const requestBody = JSON.stringify(req.body);
    const now = Date.now();
    const start = moment();
    const timeDifference = Date.now() - now;
    const res = context.switchToHttp().getResponse();
    const responseStatus = res.statusCode;

    return next.handle().pipe(
      tap((data) => {
        this.loggerService.info(`
          [${chalk.red(start.format('YYYY-MM-DD HH:mm:ss'))}]
          requestIP: [${chalk.yellow(requestIP)}]
          requestMethod: [${chalk.yellow(requestMethod)}]
          requestUrl: [${chalk.yellow(requestUrl)}]
          Request Headers: ${chalk.cyan(requestHeaders)}
          Request Query: ${chalk.green(requestQuery)}
          Request Body: ${chalk.green(requestBody)}
          ResponseTime: ${chalk.yellow(timeDifference.toString() + 'ms')}
          ResponseStatus: [${chalk.yellow(responseStatus)}]
          Response Body: ${chalk.green(JSON.stringify(data || {}))}
          `);
      })
    );
  }
}
