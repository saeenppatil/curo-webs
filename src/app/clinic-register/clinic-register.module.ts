import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicRegisterPageRoutingModule } from './clinic-register-routing.module';

import { ClinicRegisterPage } from './clinic-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicRegisterPageRoutingModule
  ],
  declarations: [ClinicRegisterPage]
})
export class ClinicRegisterPageModule {}
