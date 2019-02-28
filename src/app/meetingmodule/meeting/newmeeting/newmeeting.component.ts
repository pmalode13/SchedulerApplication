import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { Meeting } from 'src/app/Models/Meeting';
import { SchedularService } from 'src/app/Services/schedular-service.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-newmeeting',
  templateUrl: './newmeeting.component.html',
  styleUrls: ['./newmeeting.component.css']
})
export class NewmeetingComponent implements OnInit {
  model: any = {};
  isMeridian = false;
  showSpinners = true;
  meetingStartTime: Date = new Date;
  meetingEndTime: Date = new Date;
  meetingDetail: Meeting;
  attendees: Array<Number> = [];

  // variables for date formating
  selectedDate;
  startTime;
  endTime;

  checkTimeValid = false;
  roomlist = true;
  TimePicker = true;
  rooms;

  dropdownList ;
  selectedItems;

  SelectDateNotify = true;
  CheckAvailability = true;

  attendeeIdArray: Array<number> = [];

  dropdownSettings = {};
  constructor(private schedulerService: SchedularService, private router: Router,
    @Inject(LOCALE_ID) private locale: string, private authService: AuthenticationService) { }

  ngOnInit() {
    this.selectedItems = [];
    this.schedulerService.getAllUser().subscribe((response) => this.dropdownList = response);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'userId',
      textField: 'firstName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onAddNewMeetingClick() {
    for (let i = 0; i < this.selectedItems.length; i++) {
      this.attendeeIdArray.push(this.selectedItems[i].userId);
    }
    this.meetingDetail = new Meeting(this.authService.getCurrentUserId(), this.model.meetingNameLocal,
    this.model.agendaLocal, this.attendeeIdArray, this.startTime, this.endTime,
     this.model.availableRoomLocal);
    this.schedulerService.setNewMeeting(this.meetingDetail);
    this.router.navigate(['/meeting/meetingcomponent/list']);
  }

  checkDate() {
    if (this.model.dateOfTrainingLocal != '') {
      this.TimePicker = false;
      this.SelectDateNotify = false;
    }
  }
  checkTime() {

    if (this.model.meetingStartTime < this.model.meetingEndTime) {
      // Formating the date and time

      this.selectedDate = formatDate(this.model.dateOfMeetingLocal, 'yyyy-MM-dd', this.locale);
      this.startTime = (this.selectedDate + ' ' + formatDate(this.model.meetingStartTime, 'hh:mm:ss', this.locale));
      this.endTime = this.selectedDate + ' ' + formatDate(this.model.meetingEndTime, 'hh:mm:ss', this.locale);
      this.CheckAvailability = false;
      this.checkTimeValid = false;
      this.roomlist = false;
       // Call Api of available rooms
      this.schedulerService.getRooms(this.startTime, this.endTime).subscribe(
        (response) => this.rooms = response,
        (error) => console.log(error));
     
    } else {
      this.CheckAvailability = true;
      this.checkTimeValid = true;
      this.roomlist = true;
    }
  }


  visibleAvailability() {
    if (this.model.meetingStartTime < this.model.meetingEndTime) {
      this.CheckAvailability = false;
    }
    else {
      this.CheckAvailability = true
    }
  }

  addAttendee(name) {
    this.attendees.push(name);
    this.model.attendeeLocal = '';
  }

  onDeleteClick(index) {
    this.attendees.splice(index, 1);
  }

  onBackClick() {
    this.onClearClick();
    this.router.navigate(['/meeting/meetingcomponent/list']);
  }

  onClearClick() {
    this.model = '';
  }
}
