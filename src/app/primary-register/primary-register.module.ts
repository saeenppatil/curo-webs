import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimaryRegisterPageRoutingModule } from './primary-register-routing.module';

import { PrimaryRegisterPage } from './primary-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimaryRegisterPageRoutingModule
  ],
  declarations: [PrimaryRegisterPage]
})
export class PrimaryRegisterPageModule {}
