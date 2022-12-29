import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clinic-register',
  templateUrl: './clinic-register.page.html',
  styleUrls: ['./clinic-register.page.scss'],
})
export class ClinicRegisterPage implements OnInit {

  clregisterForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.clregisterForm = this.fb.group({
      clinic: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  
  route_welcomeScreen() {
    this.router.navigate(["/welcome-splash-screen"])
  }


}
