import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, map, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(response =>{
        const {data,message} =response;
        return {
          data,
          message : message || "Operation completed successfully",
          success:true,
          statusCode: context.switchToHttp().getResponse().statusCode
        }
      })
    )
    
  }
}
