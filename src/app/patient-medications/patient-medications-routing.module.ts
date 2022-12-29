import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientMedicationsPage } from './patient-medications.page';

const routes: Routes = [
  {
    path: '',
    component: PatientMedicationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientMedicationsPageRoutingModule {}
