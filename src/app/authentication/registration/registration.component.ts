import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/Models/Registration';
import { Router } from '@angular/router';
import { SchedularService } from 'src/app/Services/schedular-service.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  fname: string;
  lname: string;
  email: string;
  confPassword: string;

  post: Registration;
  data: Array<Registration> = [];

  registration: Registration;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}
  model: any = {};

  ngOnInit() {}

  onRegisterClick() {
    this.registration = new Registration(
      this.model.fname,
      this.model.lname,
      this.model.email,
      this.model.confPassword
    );
    // this.registrationService.setRegistration(this.registration);

    this.authenticationService.registerUser(this.registration);

    this.router.navigate(['auth/login']);
  }
}
