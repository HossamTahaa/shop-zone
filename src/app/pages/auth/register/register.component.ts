import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldConfig } from '../../../shared/models/fieldConfig';
import { FormComponent } from '../../../shared/components/form/form.component';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, FormComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router){}

  fieldConfigs: FieldConfig[] = [
    {
      accessor: 'username',
      displayName: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      validations: [
        { type: 'required', message: 'Username is required' },
        { type: 'minlength', value: 3, message: 'At least 3 characters' }
      ]
    },
    {
      accessor: 'email',
      displayName: 'Email',
      type: 'email',
      placeholder: 'Enter your email address',
      validations: [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Please enter a valid email' }
      ]
    },
    {
      accessor: 'password',
      displayName: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      validations: [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', value: 6, message: 'Minimum 6 characters' }
      ]
    },
    {
      accessor: 'confirmPassword',
      displayName: 'Confirm Password',
      type: 'password',
      placeholder: 'Re-enter your password',
      validations: [
        { type: 'required', message: 'Please confirm your password' }
      ]
    },
  ];

   onSubmit(formData: any) {
    console.log('Register data:', formData);
  }
     navigateToLogin() {
    this.router.navigate(['/auth/sign-in']);
  }
}
