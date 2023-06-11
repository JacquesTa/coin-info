import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signupForm!: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Redirect the user to the login screen
  onSignUp() {
    console.log(this.signupControls);
    console.log(this.emailControls);
    console.log(this.passwordControls);
  }

  // Redirect the user to the sign-up screen
  onLogin() {
    this.router.navigateByUrl('login');
  }

  // convenience getter for easy access to form fields
  get signupControls() {
    return this.signupForm.controls;
  }

  get emailControls() {
    return this.signupForm.value.email;
  }
  get passwordControls() {
    return this.signupForm.value.password;
  }
}
