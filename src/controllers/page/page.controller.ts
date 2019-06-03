import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class PageController {

  @Get('/page')
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
