import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Training } from '../Models/Training';
import { Meeting } from '../Models/Meeting';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedularService {
  constructor(private http: HttpClient) {}

  // Api For Posting New Training
  setNewTraining(training: Training) {
    console.log(training);
    return this.http
      .post('http://localhost:61574/api/Training', training)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  // Api For Geting All Upcoming Training
  getAllUpcomingTraining() {
    return this.http.get('http://localhost:61574/api/Training');
  }

  // Api For Geting Details Of Training
  getDetailsOfTraining(id: number) {
    return this.http.get('http://localhost:61574/api/Training/' + id);
  }

  // Api For Editing Training
  editTrainingDetails(id: number, training: Training) {
    return this.http
      .put('http://localhost:61574/api/Training/' + id, training)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  // Api For Deleteing Training
  deleteTraining(id: number) {
    return this.http
      .delete('http://localhost:61574/api/Training/' + id)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  // Api For Posting New Meeting
  setNewMeeting(meeting: Meeting) {
    return this.http
      .post('http://localhost:61574/api/Meeting', meeting)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  // Api For Geting All Upcoming Meeting
  getAllMeetings() {
    return this.http.get('http://localhost:61574/api/Meeting');
  }

  // Api For Details Of Meeting
  getMeetingDetails(id: number) {
    return this.http.get('http://localhost:61574/api/Meeting/' + id);
  }

  // Api For Rooms Available
  getRooms(StartTime, EndTime) {
    return this.http.post('http://localhost:61574/api/RoomDetails', {
      StartTime,
      EndTime
    });
  }

  // Api For Deleting Meeting
  deleteMeeting(id: number) {
    this.http
      .delete('http://localhost:61574/api/Meeting/' + id)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  // Api For Editing Meeting
  editMeeting(id: Number, meeting: Meeting) {
    this.http
      .put('http://localhost:61574/api/Meeting/' + id, meeting)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Incorrect Input`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: Record not found`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getAllUser() {
    return this.http.get('http://localhost:61574/api/UserMeeting');
  }
}
