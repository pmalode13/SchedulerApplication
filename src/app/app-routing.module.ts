import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training/training.component';
import { UpcomingTrainingListComponent } from './training/upcoming-training-list/upcoming-training-list.component';
import { EditTrainingComponent } from './training/edit-training/edit-training.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginpageComponent } from './authentication/loginpage/loginpage.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AuthenticationService } from './Services/authentication.service';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';



const routes: Routes = [
  
  {path:'',component:AuthenticationComponent,children:[
    {path:'',component:LoginpageComponent}
  ]},
  { path: 'auth', component: AuthenticationComponent, children:[
    { path: 'login', component: LoginpageComponent },
    { path: 'forgetpassword' , component: ForgotPasswordComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'resetPassword', component: ResetPasswordComponent }
  ] },
  
  {
    path: 'training', component: TrainingComponent, canActivate: [AuthenticationService], children: 
  [{ path: 'upcomingTrainingList', component: UpcomingTrainingListComponent },
  { path: 'editTraining/:id', component: EditTrainingComponent }

] },
  { path: 'newTraining', loadChildren: './training/newtraining/newtraining.module#NewtrainingModule', canActivate: [AuthenticationService]},
  { path: 'trainingDetails', loadChildren: './training/training-details/training-details.module#TrainingDetailsModule', canActivate: [AuthenticationService] },

  { path: 'meeting', loadChildren: './meetingmodule/meeting.module#MeetingModule', canActivate: [AuthenticationService] },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
