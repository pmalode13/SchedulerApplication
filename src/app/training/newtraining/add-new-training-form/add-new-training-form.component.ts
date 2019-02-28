import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { Training } from 'src/app/Models/Training';
import { SchedularService } from 'src/app/Services/schedular-service.service';
import { formatDate } from '@angular/common';

import { Router } from '@angular/router';
import { Time } from 'ngx-bootstrap/timepicker/timepicker.models';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-add-new-training-form',
  templateUrl: './add-new-training-form.component.html',
  styleUrls: ['./add-new-training-form.component.css']
})
export class AddNewTrainingFormComponent implements OnInit {
  model: any = {};
  isMeridian = false;
  showSpinners = true;

  trainingStartTime: Time;
  trainingEndTime: Time;
  newTraining: Training;
  selectedDate;
  startTime: string;
  endTime: string;

  rooms;
  checkTimeValid = false;
  roomlist = true;
  TimePicker = true;
  SelectDateNotify = true;
  CheckAvailability = true;
  constructor(private schedularService: SchedularService, private authService: AuthenticationService,
    @Inject(LOCALE_ID) private locale: string, private router: Router) {

  }

  ngOnInit() {
  }

  checkDate() {
    if (this.model.dateOfTrainingLocal != '') {
      this.TimePicker = false;
      this.SelectDateNotify = false;
    }
  }
  checkTime() {

    if (this.model.trainingStartTime < this.model.trainingEndTime) {
      // Formating the date and time

      this.selectedDate = formatDate(this.model.dateOfTrainingLocal, 'yyyy-MM-dd', this.locale);
      this.startTime = (this.selectedDate + ' ' + formatDate(this.model.trainingStartTime, 'hh:mm:ss', this.locale));
      this.endTime = this.selectedDate + ' ' + formatDate(this.model.trainingEndTime, 'hh:mm:ss', this.locale);

      this.checkTimeValid = false;
      this.roomlist = false;
      // Call Api of available rooms
      this.schedularService.getRooms(this.startTime, this.endTime).subscribe(
        (response) => this.rooms = response,
        (error) => console.log(error));
    } else {

      this.CheckAvailability = true;
      this.checkTimeValid = true;
      this.roomlist = true;

    }
  }

  visibleAvailability() {
    if (this.model.trainingStartTime < this.model.trainingEndTime) {
      this.CheckAvailability = false;
    }
    else {
      this.CheckAvailability = true
    }
  }

  onAddNewTrainingClick() {
    this.newTraining = (new Training(this.authService.getCurrentUserId(), this.model.topicNameLocal,
      this.model.summaryLocal,
      this.startTime,
      this.endTime
      , (+this.model.availableRoomLocal)));
    this.schedularService.setNewTraining(this.newTraining);
    this.router.navigate(['training/upcomingTrainingList']);
  }

  onBackClick() {
    this.onClearClick();
    this.router.navigate(['training/upcomingTrainingList']);
  }
  onClearClick() {
    this.model = '';
  }
}
