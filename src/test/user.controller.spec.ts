import { LoggerModule } from './../modules/common/logger/logger.module';
import { SharedModule } from './../modules/common/shared/shared.module';
import { Test } from '@nestjs/testing';
import { UserService } from './../services/user/user.service';
import { UserController } from './../controllers/user/user.controller';


/**
 * user 测试用例
 * 参考： https://ithelp.ithome.com.tw/articles/10191465
 * 注意：
 * 1. 公共的模块也需要添加（例如LoggerModule），否则报错
 */
describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [
        LoggerModule,
        SharedModule
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
  });

  describe('runTest', () => {
    it('test user', async () => {
      const data = {
        "id": "2",
        "user_name": "张三",
      };
      const result = {
        "code": 200,
        "message": "获取用户信息成功",
        data
      };

      jest.spyOn(userService, 'getOne').mockImplementation(() => Promise.resolve(data));

      expect(await userController.findUser('2')).toEqual(result);
    });
  });

});