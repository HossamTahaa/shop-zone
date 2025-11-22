import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent, 
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
];

export default routes;
