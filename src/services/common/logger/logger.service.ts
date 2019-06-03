import chalk from 'chalk';
import { getLogger } from 'log4js';
import { LOGGER_LEVEL } from '../../../constants/common/logger.constants';

export class LoggerService {

  private logger = getLogger();

  constructor() {
    this.logger.level = 'debug';
  }

  public log(level: LOGGER_LEVEL, msg: string, ...meta): void {
    this.logger.log(level, msg, ...meta);
  }

  public debug(msg: string, ...meta): void {
    this.logger.debug(msg, ...meta);
  }

  public error(msg: string, ...meta): void {
    this.logger.error(msg, ...meta);
  }

  public warning(msg: string, ...meta): void {
    this.logger.warn(msg, ...meta);
  }

  public info(msg: string, ...meta): void {
    this.logger.info(chalk.cyan(msg), ...meta);
  }
}
