import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../../../shared/components/form/form.component';
import { FieldConfig } from '../../../shared/models/fieldConfig';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormComponent],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor (private router: Router){}
fieldConfigs: FieldConfig[] = [
    { accessor: 'MobileNumber', displayName: 'User Name', type: 'text', validations: [{ type: 'required', message: 'Username is required' }] },
    { accessor: 'password', displayName: 'Password', type: 'password', validations: [{ type: 'required', message: 'Password is required' }] },
  ];

  onSubmit(formValue: any) {
    console.log('Form submitted:', formValue);
        this.router.navigate(['/admin']);
  }
   GoToCreateAccount(){
  this.router.navigate(['/auth/register']);
   }
}
