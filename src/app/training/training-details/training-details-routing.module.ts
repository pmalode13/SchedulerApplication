import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingDetailComponent } from './training-detail/training-detail.component';

const routes: Routes = [
  {path:'trainingDetailsForm/:id',component:TrainingDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingDetailsRoutingModule { }
