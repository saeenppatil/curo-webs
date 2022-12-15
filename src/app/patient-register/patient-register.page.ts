import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.page.html',
  styleUrls: ['./patient-register.page.scss'],
})
export class PatientRegisterPage implements OnInit {

  


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  route_login() {
    this.router.navigate(["/login"])
  }

  route_doctorRegistration() {
    this.router.navigate(["/doctor-registration"])
  }
}

