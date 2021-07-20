import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from 'src/app/models/Profile';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  profile: Profile;
  profileForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^[A-Za-z]+$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.pattern('^[A-Za-z]+$'),
      ]),
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        Validators.email,
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern('^[0-9]+$'),
      ]),
      dateOfBirth: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required]),
    });
  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get firstNameValue() {
    return this.profileForm.get('firstName').value;
  }

  get lastName() {
    return this.profileForm.get('lastName');
  }

  get lastNameValue() {
    return this.profileForm.get('lastName').value;
  }

  get email() {
    return this.profileForm.get('email');
  }

  get emailValue() {
    return this.profileForm.get('email').value;
  }

  get phoneNumber() {
    return this.profileForm.get('phoneNumber');
  }

  get phoneNumberValue() {
    return this.profileForm.get('phoneNumber').value;
  }

  get dateOfBirth() {
    return this.profileForm.get('dateOfBirth');
  }

  get dateOfBirthValue() {
    return this.profileForm.get('dateOfBirth').value;
  }

  get comments() {
    return this.profileForm.get('comments');
  }

  get commentsValue() {
    return this.profileForm.get('comments').value;
  }

  onSubmit() {
    this.profile = {
      firstName: this.firstNameValue,
      lastName: this.lastNameValue,
      email: this.emailValue,
      phoneNumber: this.phoneNumberValue,
      dateOfBirth: this.dateOfBirthValue,
      comments: this.commentsValue,
    };

    console.log(this.profile);
  }
}
