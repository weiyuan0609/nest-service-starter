# Nest 搭建微服务示例

## 框架介绍

Nest 是构建高效，可扩展的 Node.js Web 应用程序的框架。它使用现代的 JavaScript 或 TypeScript（保留与纯 JavaScript 的兼容性），并结合 OOP（面向对象编程），FP（函数式编程）和 FRP（函数响应式编程）的元素。

在底层，Nest 使用强大的 HTTP Server 框架，如 Express（默认）和 Fastify。Nest 在这些框架之上提供了一定程度的抽象，但也可以将其 API 直接暴露给开发人员。这样可以轻松使用每个平台的无数第三方模块。

Nest 有点类似 spring, 对于基础理论，设计模式，原生语法，编程思想等都要有一定的理解。上手难度较高。

## 文档

- nest
  - [nest.js  中文文档](https://docs.nestjs.cn/)
  - [nest.js 阿里云中文文档](https://cloud.tencent.com/developer/section/1490222)
  - [nest.js  英文文档](https://nestjs.com/)
  - [nest.js 示例](https://github.com/nestjs/nest/tree/master/sample)
  - [nest.js 博客](https://github.com/dzzzzzy/Nestjs-Learning)
- 基础和库
  - [Node.js 文档](http://nodejs.cn/api/)
  - [ORM 文档](http://typeorm.io/#/)
  - [log4js 日志记录插件](https://github.com/log4js-node/log4js-node)
  - [log4js 介绍博客](https://juejin.im/post/57b962af7db2a200542a0fb3#heading-9)
  - [chalk terminal美化](https://github.com/chalk/chalk)
  - [rx.js 英文文档](https://rxjs-dev.firebaseapp.com/guide/overview)
  - [rx.js 中文文档](https://rxjs-cn.github.io/learn-rxjs-operators/about/)
  - [ejs 模板](https://ejs.bootcss.com/)
  - [express](https://expressjs.com/)
  - [typescript](https://www.tslang.cn/docs/home.html)
  - [GraphQL](https://github.com/graphql/graphql-js)
    - 📚 [官方文档](https://graphql.org)
    - 📚 [中文文档](https://graphql.cn)
    - 🏫 [GraphQL的全栈教程](https://www.howtographql.com/)
    - GraphQL IDE [graphql-playground](https://github.com/prisma/graphql-playground)
- 思想
  - [OOP 六大原则](https://www.jianshu.com/p/f2c2250cc33b)
  - [AOP](https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%88%87%E9%9D%A2%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)
  - [AOP 论坛解释](https://www.zhihu.com/question/24863332)
  - [FP 文档](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
  - [FRP 论坛解释](https://juejin.im/post/5996faa46fb9a024747edce4)
  - [IOC](https://www.geekjc.com/post/5c3448e41ee6dd2e881140dd#6.)
...

## 启动

```bash
npm install

npm run start:dev
```

## 访问

- swagger 地址： <http://localhost:3000/api>
- 页面地址：<http://localhost:3000/page>

## 目录结构

```js
config\                // 配置文件

dist\                  // 构建后的输出目录

public\                // 静态文件

views\                 // 视图页面

src\

  constants\           // 常量

  controllers\         // 控制器

  entity\

  exceptions\          // 自定义异常

  interceptors\        // 拦截器

  interfaces\          // DTO

  middlewares\         // 接口文件

  modules\             // 模块

  services\            // 提供者

  test\                // 测试用例

  utils\               // 工具类

  main.ts              // 入口

  app.module.ts

.gitignore              // git忽略的文件配置

test\                   // 测试文件

package.json            // 依赖管理

README.md               // 项目描述

tsconfig.json           // ts配置

tslint.json             // ts风格检查

```

## 实现功能

- [x] 支持接口 swagger 文档化 (支持展示 request model 和 response model)
- [x] 支持请求日志打印
- [x] 丰富终端日志显示样式
- [x] 支持自定义异常错误
- [x] 支持接口返回数据格式化
- [x] 支持输入、输出参数校验
- [x] 支持页面请求渲染(暂不支持传参)
- [ ] 单元测试（待更新）
- [ ] 支持鉴权，认证（待更新）
- [ ] 连接, 操作数据库（待更新）
- [ ] 支持 graphql（待更新）
