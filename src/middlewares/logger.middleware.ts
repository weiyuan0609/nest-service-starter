import { Injectable, NestMiddleware } from '@nestjs/common';
import chalk from 'chalk';
import { getLogger } from 'log4js';
import * as moment from 'moment';

const logger = getLogger();
logger.level = 'debug';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {

  public async use(req: any, res: any, next: any) {
    const start = moment();
    const startUnixtime = start.valueOf();
    const requestIP = req.headers['X-Real-IP'] || req.ip || '0.0.0.0';
    const requestMethod = req.method;
    const requestUrl = req.originalUrl;
    const requestHeaders = JSON.stringify(req.headers);
    const requestBody = JSON.stringify(req.body);
    const responseStatus = res.statusCode;
    const ms = moment().valueOf() - startUnixtime;
    const responseHeaders = req.get['X-Powered-By'];
    const requestQuery = JSON.stringify(req.query);
    const responseBody = res.body;

    logger.info(`
      env: [${chalk.yellow(process.env.NODE_ENV)}]
      [${chalk.red(start.format('YYYY-MM-DD HH:mm:ss'))}]
      requestIP: [${chalk.yellow(requestIP)}]
      requestMethod: [${chalk.yellow(requestMethod)}]
      requestUrl: [${chalk.yellow(requestUrl)}]
      responseStatus: [${chalk.yellow(responseStatus)}]
      ms: [${chalk.green(String(ms))}ms]
      Request Headers: ${chalk.cyan(requestHeaders)}
      Request Query: ${chalk.green(requestQuery)}
      Request Body: ${chalk.green(requestBody)}
    `);

    next();
  }

}