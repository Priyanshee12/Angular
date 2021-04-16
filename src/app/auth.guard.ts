import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/assets/data/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: CommonService){ }
  // tslint:disable-next-line: typedef
  canActivate(){
    // if(this.service.isUserLoggedIn){
    //     return true;
    // }
    // else{
    //   window.alert("Login first");
    //   return false;
    // }
    return false;
  }
}
