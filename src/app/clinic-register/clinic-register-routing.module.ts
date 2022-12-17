import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicRegisterPage } from './clinic-register.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicRegisterPageRoutingModule {}
