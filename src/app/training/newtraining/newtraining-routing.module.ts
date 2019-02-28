import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewTrainingFormComponent } from './add-new-training-form/add-new-training-form.component';

const routes: Routes = [
  {path:'newTrainingForm/:id',component:AddNewTrainingFormComponent},
  {path:'newTrainingForm',component:AddNewTrainingFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewtrainingRoutingModule { }
