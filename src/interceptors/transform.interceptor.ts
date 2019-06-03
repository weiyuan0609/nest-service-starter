import { ExecutionContext, Injectable, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IResponse<T> {
  data: T;
}

/**
 * 数据格式化拦截器
 */
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, IResponse<T>> {

  public intercept(context: ExecutionContext, next: CallHandler): Observable<IResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        return ({
          data,
          statusCode: 200
        });
      })
    );
  }
}
