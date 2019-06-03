import { Global, Module } from '@nestjs/common';
import { ValidationPipe } from './validation.pipe';
import { TransformInterceptor } from './../../../interceptors/transform.interceptor';

@Global()
@Module({
  providers: [
    ValidationPipe,
    TransformInterceptor
  ],
  exports: [
    ValidationPipe,
    TransformInterceptor
  ]
})
export class SharedModule {
}