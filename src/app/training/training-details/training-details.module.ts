import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDetailsRoutingModule } from './training-details-routing.module';
import { TrainingDetailComponent } from './training-detail/training-detail.component';


import { FormsModule }   from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule} from 'ngx-bootstrap/timepicker';

@NgModule({
  declarations: [TrainingDetailComponent],
  imports: [
    FormsModule,
    BsDatepickerModule,
    TimepickerModule,
    CommonModule,
    TrainingDetailsRoutingModule
  ]
})
export class TrainingDetailsModule { }
