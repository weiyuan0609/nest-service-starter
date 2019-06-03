import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as path from 'path';
import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from './modules/common/shared/validation.pipe';
import { SharedModule } from './modules/common/shared/shared.module';
import { LoggerService } from './services/common/logger/logger.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // 前端页面访问
  app.useStaticAssets(path.join(__dirname, '..', 'public'), { prefix: '/public/' });
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  // 全局的校验的管道
  const validationPipe = app.select(SharedModule).get(ValidationPipe);
  app.useGlobalPipes(validationPipe);

  // swagger 文档
  const options = new DocumentBuilder()
  .setTitle('nest搭建restful')
  .setDescription('nest微服务Swagger文档')
  .setVersion('1.0')
  .addTag('用户')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => {
    new LoggerService().debug(`监听端口${port}`);
  });
}

bootstrap();
