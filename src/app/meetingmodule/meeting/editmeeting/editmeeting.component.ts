import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { SchedularService } from 'src/app/Services/schedular-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from 'src/app/Models/Meeting';
import { formatDate } from '@angular/common';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-editmeeting',
  templateUrl: './editmeeting.component.html',
  styleUrls: ['./editmeeting.component.css']
})
export class EditmeetingComponent implements OnInit {
  model: any = {};
  isMeridian = false;
  showSpinners = true;
  trainingStartTime: Date = new Date();
  trainingEndTime: Date = new Date();
  id;
  attendeesId: Array<Number> = [];
  meetingDetails;
  meeting: Meeting;

  // variables for date formating
  selectedDate;
  startTime;
  endTime;

  checkTimeValid = false;
  roomlist = true;
  TimePicker = false;
  rooms;

  dropdownList;
  selectedItems;
  dropdownSettings = {};

  CheckAvailability = false;

  constructor(
    private route: ActivatedRoute,
    private schedularService: SchedularService,
    private router: Router,
    @Inject(LOCALE_ID) private locale: string,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.meetingDetails = {};
    this.selectedItems = [];
    this.schedularService
      .getAllUser()
      .subscribe(response => (this.dropdownList = response));

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'userId',
      textField: 'firstName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.id = +this.route.snapshot.params['id'];

    this.schedularService
      .getMeetingDetails(this.id)
      .subscribe(
        meeting => (this.meetingDetails = meeting),
        response => console.log(response)
      );
  }

  onBackClick() {
    this.onClearClick();
    this.router.navigate(['meeting/meetingcomponent/list']);
  }
  onClearClick() {
    this.meetingDetails = '';
    this.attendeesId = [];
  }
  onDeleteClick(index) {
    this.attendeesId.splice(index, 1);
  }

  

  checkTime() {
    if (this.meetingDetails.startTime < this.meetingDetails.endTime) {
      // Formating the date and time

      this.selectedDate = formatDate(
        this.meetingDetails.startTime,
        'yyyy-MM-dd',
        this.locale
      );
      this.startTime =
        this.selectedDate +
        ' ' +
        formatDate(this.meetingDetails.startTime, 'hh:mm:ss', this.locale);
      this.endTime =
        this.selectedDate +
        ' ' +
        formatDate(this.meetingDetails.endTime, 'hh:mm:ss', this.locale);
      this.CheckAvailability = false;
      this.checkTimeValid = false;
      this.roomlist = false;
      this.schedularService
        .getRooms(this.startTime, this.endTime)
        .subscribe(
          response => (this.rooms = response),
          error => console.log(error)
        );
    } else {
      this.CheckAvailability = true
      this.checkTimeValid = true;
      this.roomlist = true;
    }
  }

  visibleAvailability() {
    if (this.meetingDetails.startTime < this.meetingDetails.endTime) {
      this.CheckAvailability = false;
    }
    else {
      this.CheckAvailability = true
    }
  }

  onEditMeetingClick() {
    for (let i = 0; i < this.selectedItems.length; i++) {
      this.attendeesId.push(this.selectedItems[i].userId);
    }
    this.meeting = new Meeting(
      this.authService.getCurrentUserId(),
      this.meetingDetails.meetingName,
      this.meetingDetails.agenda,
      this.attendeesId,
      this.startTime,
      this.endTime,
      this.model.availableRoomLocal
    );

    this.schedularService.editMeeting(this.id, this.meeting);
    this.router.navigate(['meeting/meetingcomponent/list']);
  }
}
