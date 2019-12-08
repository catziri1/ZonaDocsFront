import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  emailInput: string = "";
  passwordInput: string = "";
  wrongLogin: boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  handleLoginClick(){
    this.loginService.login(this.emailInput, this.passwordInput).then((result) => {
      if(result.auth){
        this.wrongLogin = false;
        localStorage.setItem("token", result.token);
        this.router.navigate(['/admin/notas']);
      } else {
        this.wrongLogin = true;
      }
    });
  }

}
