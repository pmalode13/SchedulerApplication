import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './meeting/list/list.component';
import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingComponent } from './meeting/meeting.component';
import { NewmeetingComponent } from './meeting/newmeeting/newmeeting.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule }   from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule} from 'ngx-bootstrap/timepicker';
import { MeetingdetailsComponent } from './meeting/meetingdetails/meetingdetails.component';
import { EditmeetingComponent } from './meeting/editmeeting/editmeeting.component';

@NgModule({
  declarations: [ListComponent,MeetingComponent, NewmeetingComponent, MeetingdetailsComponent, EditmeetingComponent],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    CommonModule,
    MeetingRoutingModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
  
  ]
})
export class MeetingModule { }
