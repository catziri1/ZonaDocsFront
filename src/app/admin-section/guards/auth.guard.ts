import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { LoginService } from '../admin-login/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router){}
  canActivate(): boolean {
    if(this.loginService.checkIfLogged()){
      return true;
    }else{
      this.router.navigate(['admin/login']);
      return false;
    }
  }
}
