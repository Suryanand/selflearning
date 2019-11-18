import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogin : boolean = false;
  constructor(private loginService : LoginService,
    private route : Router) { }

  ngOnInit() {
  }

  login(){
    this.isLogin = this.loginService.isLoggedIn = true;
    this.route.navigate(['dashboard']);
  }
}
