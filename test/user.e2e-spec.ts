import { TransformInterceptor } from './../src/interceptors/transform.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerModule } from './../src/modules/common/logger/logger.module';
import { SharedModule } from './../src/modules/common/shared/shared.module';
import { UserModule } from '../src/modules/user/user.module';
import { Test } from '@nestjs/testing';
import { UserService } from '../src/services/user/user.service';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';


/**
 * user E2E测试
 * 注意：
 * 1. imports 公共的模块也需要添加（例如LoggerModule），否则报错
 * 2. 期望值校验待定
 */
describe('User', () => {
  let app: INestApplication;
  let userService = {
    getOne: () => {
      return {
        "id": "2",
        "user_name": "张三"
      }
    }
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        UserModule,
        LoggerModule,
        SharedModule,
      ],
    })
      .overrideProvider(UserService)
      .useValue(userService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET 获取指定用户 /user/2`, () => {
    return request(app.getHttpServer())
      .get('/user/2')
      .expect(200)
  });

  afterAll(async () => {
    await app.close();
  });

});


