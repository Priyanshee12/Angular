import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
// import { nextTick } from 'node:process';
import { Observable } from 'rxjs';
import { CommonService } from 'src/assets/data/common.service';


@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req:any,next:any){
    let authService=this.injector.get(CommonService)
    let tokenizedReq=req.clone({
        setHeaders: {
          Authorization: `Bearer ${authService.getToken()}`
        }
    })
    return next.handle(tokenizedReq)
  }
}
