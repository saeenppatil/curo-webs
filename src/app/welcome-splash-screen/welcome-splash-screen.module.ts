import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeSplashScreenPageRoutingModule } from './welcome-splash-screen-routing.module';

import { WelcomeSplashScreenPage } from './welcome-splash-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeSplashScreenPageRoutingModule
  ],
  declarations: [WelcomeSplashScreenPage]
})
export class WelcomeSplashScreenPageModule {}
