import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  model: any = {};
  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }
  onResetClick() {
    this.authService.resetPassword(this.model.confPassword);
    this.router.navigate(['auth/login']);
  }
}
