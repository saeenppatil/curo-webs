import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimaryRegisterPage } from './primary-register.page';

const routes: Routes = [
  {
    path: '',
    component: PrimaryRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimaryRegisterPageRoutingModule {}
