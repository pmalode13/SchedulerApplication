import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './meeting/list/list.component';
import { MeetingComponent } from './meeting/meeting.component';
import { NewmeetingComponent } from './meeting/newmeeting/newmeeting.component';
import { MeetingdetailsComponent } from './meeting/meetingdetails/meetingdetails.component';
import { EditmeetingComponent } from './meeting/editmeeting/editmeeting.component';



const routes: Routes = [
  { path:'meetingcomponent',component:MeetingComponent,children:
  [{ path: 'list', component: ListComponent },
  { path: 'details/:id', component: MeetingdetailsComponent },
  { path: 'editmeeting/:id', component: EditmeetingComponent },
  {path:'newmeeting', component:NewmeetingComponent}]}
  ];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }
