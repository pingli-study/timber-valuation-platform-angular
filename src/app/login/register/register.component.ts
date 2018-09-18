import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  detailForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit() {

    // First Step
    this.signupForm = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
        ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
        ]
      ],
      'region': ['', [
        ]
      ],
    });

    // Second Step
    this.detailForm = this.fb.group({
      'firstName': ['', [ Validators.required ] ],
      'lasstName': ['', [ Validators.required ] ],
      'role':      ['', [ Validators.required ] ],
    });
    
  }

  // Form 1 getters
  get email() { return this.signupForm.get('email') }
  get password() { return this.signupForm.get('password') }

  // Form 2 getters
  get firstName() { return this.detailForm.get('firstName') }
  get lastName() { return this.detailForm.get('lastName') }
  // get role() { return this.detailForm.get('role') }


  // Step 1
  signup() {
    return this.auth.emailSignUp(this.email.value, this.password.value)
  }

  // Step 2
  setData(user) {
    return this.auth.updateUser(user, {
      firstName:  this.firstName.value,
      lastName: this.lastName.value
    })
  }
}
