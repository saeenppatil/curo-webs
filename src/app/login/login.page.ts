import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string=""
  password: string=""

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
  }
  route_patientRegister() {
    this.router.navigate(["/patient-register"])
  }

  route_home() {
    this.router.navigate(["/home"])
  }

}