import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
  private authService: AuthenticationService) { }
  model: any = {};
  ngOnInit() {
  }

  onResetPassword() {
    this.authService.forgotPassword(this.model.email).subscribe((response) =>
      console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['auth/login'])
  }
}

