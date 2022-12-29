import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.page.html',
  styleUrls: ['./patient-register.page.scss'],
})
export class PatientRegisterPage implements OnInit {

  ptregisterForm: FormGroup;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {

    
  }


  route_welcomeScreen() {
    this.router.navigate(["/welcome-splash-screen"])
  }

}

