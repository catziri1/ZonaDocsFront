import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email: string;
  password: string;
  wrongLogin: boolean = false;
  constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
  }

  handleLoginClick(){
    this.loginService.login(this.email, this.password).then((result) => {
      if(result.auth){
        this.wrongLogin = false;
        this.cookieService.set('token', result.token);
        this.router.navigate(['/admin/notas']);
      }else{
        this.wrongLogin = true;
      }
    });
  }

}
