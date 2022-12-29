import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientMedicationsPageRoutingModule } from './patient-medications-routing.module';

import { PatientMedicationsPage } from './patient-medications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientMedicationsPageRoutingModule
  ],
  declarations: [PatientMedicationsPage]
})
export class PatientMedicationsPageModule {}
