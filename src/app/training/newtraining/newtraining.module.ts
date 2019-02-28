import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewtrainingRoutingModule } from './newtraining-routing.module';
import { AddNewTrainingFormComponent } from './add-new-training-form/add-new-training-form.component';

import { FormsModule }   from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule} from 'ngx-bootstrap/timepicker';


import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddNewTrainingFormComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    NewtrainingRoutingModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ]
})
export class NewtrainingModule { }
