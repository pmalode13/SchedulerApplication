import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SchedularService } from 'src/app/Services/schedular-service.service';
import { Training } from 'src/app/Models/Training';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  id;
  trainingDetails;

  constructor( private route: ActivatedRoute,private schedularService:SchedularService) {
  }

  ngOnInit() {
    this.trainingDetails = {};
    this.id = ((+this.route.snapshot.params['id']));

    this.schedularService.getDetailsOfTraining(this.id)
      .subscribe((training) => this.trainingDetails = <JSON>training );
  }
}
