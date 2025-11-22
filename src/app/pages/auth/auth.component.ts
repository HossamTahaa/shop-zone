import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthLayoutComponent } from "../../layouts/auth-layout/auth-layout.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, AuthLayoutComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
