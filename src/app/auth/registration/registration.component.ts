import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  constructor(public router: Router) {}

  // Redirect the user to the login screen
  onLogin() {
    console.log('login');

    this.router.navigateByUrl('login');
  }

  // Redirect the user to the sign-up screen
  onSignUp() {
    console.log('sign-up');
    this.router.navigateByUrl('sign-up');
  }
}
