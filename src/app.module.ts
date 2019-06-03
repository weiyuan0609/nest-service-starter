import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerModule } from './modules/common/logger/logger.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './modules/common/shared/shared.module';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { FriendModule } from './modules/friend/friend.module';
import { PageController } from './controllers/page/page.controller';


@Module({
  imports: [
    LoggerModule,
    SharedModule,
    UserModule,
    FriendModule
  ],
  controllers: [PageController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor // 返回的数据格式化拦截器
    }
  ]
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');     // 使用中间件
  }
}
