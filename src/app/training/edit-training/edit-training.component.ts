import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedularService } from 'src/app/Services/schedular-service.service';
import { Training } from 'src/app/Models/Training';

import { formatDate } from '@angular/common';

import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-edit-training',
  templateUrl: './edit-training.component.html',
  styleUrls: ['./edit-training.component.css']
})
export class EditTrainingComponent implements OnInit {
  model: any = {};
  isMeridian = false;
  showSpinners = true;

  id: number;
  trainingStartTime: Time;
  trainingEndTime: Time;
  newTraining: Training;
  selectedDate;
  startTime: string;
  endTime: string;
  rooms;

  checkTimeValid = true;
  roomlist = true;
  details;
 
  CheckAvailability = false;

  constructor(
    private route: ActivatedRoute,
    private schedularService: SchedularService,
    @Inject(LOCALE_ID) private locale: string,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.details = {};
    this.id = +this.route.snapshot.params['id'];

    this.schedularService
      .getDetailsOfTraining(this.id)
      .subscribe(
        training => (this.details = training),
        response => console.log(response)
      );
    this.model.dateOfTrainingLocal = this.details.startTime;
  }
    

  checkTime() {
    if (this.details.startTime < this.details.endTime) {
      // Formating the date and time
      this.selectedDate = formatDate(
        this.details.startTime,
        'yyyy-MM-dd',
        this.locale
      );
      this.startTime =
        this.selectedDate +
        ' ' +
        formatDate(this.details.startTime, 'hh:mm:ss', this.locale);
      this.endTime =
        this.selectedDate +
        ' ' +
        formatDate(this.details.endTime, 'hh:mm:ss', this.locale);
      this.CheckAvailability = false;
      this.checkTimeValid = false;
      this.roomlist = false;
      //// Call Api For Rooms
      this.schedularService
        .getRooms(this.startTime, this.endTime)
        .subscribe(
          response => (this.rooms = response),
          error => console.log(error)
        );
    } else {
      this.CheckAvailability = true;
      this.checkTimeValid = true;
      this.roomlist = true;
    }
  }

  

  visibleAvailability() {
    if (this.details.startTime < this.details.endTime) {
      this.CheckAvailability = false;
    }
    else {
      this.CheckAvailability = true
    }
  }
  onEditClick() {
    this.newTraining = new Training(
      this.authService.getCurrentUserId(),
      this.details.topic,
      this.details.description,
      this.startTime,
      this.endTime,
      +this.model.availableRoomLocal
    );

    this.schedularService.editTrainingDetails(this.id, this.newTraining);
    this.router.navigate(['training/upcomingTrainingList']);
  }
  onBackClick() {
    this.onClearClick();
    this.router.navigate(['training/upcomingTrainingList']);
  }
  onClearClick() {
    this.details = '';
  }
}
