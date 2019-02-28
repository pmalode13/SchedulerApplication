import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})

export class LoginpageComponent implements OnInit {
  model: any = {};
  responseToken;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {}

  onRegisterClick() {
    this.router.navigate(['auth/registration']);
  }

  onForgetPassClick() {
    this.router.navigate(['auth/forgetpassword']);
  }

  onLoginClick() {
    console.log('In Login');
    this.authenticationService
      .checkLogin(this.model.email, this.model.password)
      .subscribe(response => {
        if (response.status >= 200 && response.status <= 300) {
          this.responseToken = <JSON>response.body;
          this.authenticationService.setToken(this.responseToken.token);
          this.authenticationService.setCurreentUserName(
            this.responseToken.firstName
          );
          this.authenticationService.setCurreentUserId(
            this.responseToken.userId
          );
          this.router.navigate(['training/upcomingTrainingList']);
        }
      });
  }
}
