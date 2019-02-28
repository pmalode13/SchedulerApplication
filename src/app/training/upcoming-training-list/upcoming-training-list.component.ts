import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchedularService } from 'src/app/Services/schedular-service.service';


@Component({
  selector: 'app-upcoming-training-list',
  templateUrl: './upcoming-training-list.component.html',
  styleUrls: ['./upcoming-training-list.component.css']
})
export class UpcomingTrainingListComponent implements OnInit {
  date: Date;
  trainingDetails;
  constructor(private router: Router, private schedularService: SchedularService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.schedularService.getAllUpcomingTraining().subscribe((training) => this.trainingDetails = <JSON>training),
      (error) => console.log;
  }
  onDetailsClick(id: number) {
    this.schedularService.getDetailsOfTraining(id);
    this.router.navigate(['trainingDetails', 'trainingDetailsForm', id]);

  }

  onEditClick(id: number) {
    this.router.navigate(['training', 'editTraining', id]);
  }

  onDeleteClick(id: number) {
    this.schedularService.deleteTraining(id);
    // Reload Component
    this.getData();
  }
}
