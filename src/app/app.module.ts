import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrainingComponent } from './training/training.component';
import { UpcomingTrainingListComponent } from './training/upcoming-training-list/upcoming-training-list.component';
import { EditTrainingComponent } from './training/edit-training/edit-training.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FormsModule }   from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule} from 'ngx-bootstrap/timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginpageComponent } from './authentication/loginpage/loginpage.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { InterceptorService } from './Services/interceptor.service';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { CompareValidatorDirective } from './Shared/compare-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrainingComponent,
    UpcomingTrainingListComponent,
    EditTrainingComponent,
    AuthenticationComponent,
    LoginpageComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CompareValidatorDirective
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [InterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
