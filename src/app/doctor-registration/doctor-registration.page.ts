import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.page.html',
  styleUrls: ['./doctor-registration.page.scss'],
})
export class DoctorRegistrationPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  route_login() {
    this.router.navigate(["/login"])
  }

  route_patientRegistration() {
    this.router.navigate(["/patient-register"])
  }
}
