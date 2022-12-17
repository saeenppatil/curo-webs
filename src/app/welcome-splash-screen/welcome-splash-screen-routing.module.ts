import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeSplashScreenPage } from './welcome-splash-screen.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeSplashScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeSplashScreenPageRoutingModule {}
