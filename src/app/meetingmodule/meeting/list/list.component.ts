import { Component, OnInit } from '@angular/core';
import { SchedularService } from 'src/app/Services/schedular-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  meetingDetails;
  constructor(
    private schedularService: SchedularService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.schedularService
      .getAllMeetings()
      .subscribe(meeting => (this.meetingDetails = <JSON>meeting));
  }

  onDetailsClick(id: number) {
    this.router.navigate(['meeting', 'meetingcomponent', 'details', id]);
  }

  onEditClick(id: number) {
    console.log(id);
    this.router.navigate(['meeting', 'meetingcomponent', 'editmeeting', id]);
  }

  onDeleteClick(id: number) {
    this.schedularService.deleteMeeting(id);
    this.router.navigate(['/meeting/meetingcomponent/list']);
  }
}
