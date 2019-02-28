import { Component, OnInit } from '@angular/core';
import { Meeting } from 'src/app/Models/Meeting';
import { ActivatedRoute } from '@angular/router';
import { SchedularService } from 'src/app/Services/schedular-service.service';

@Component({
  selector: 'app-meetingdetails',
  templateUrl: './meetingdetails.component.html',
  styleUrls: ['./meetingdetails.component.css']
})
export class MeetingdetailsComponent implements OnInit {
  meetingDetails ;
  id;
  constructor(private route: ActivatedRoute, private schedularService: SchedularService) {
  }
  ngOnInit() {
    this.meetingDetails = {};
    this.id = ((+this.route.snapshot.params['id']));

    this.schedularService.getMeetingDetails(this.id)
      .subscribe((meeting) => this.meetingDetails = <JSON>meeting,
        (response) => console.log(response)
      );
  }

}
