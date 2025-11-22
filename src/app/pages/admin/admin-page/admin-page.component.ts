import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminState } from '../../../state/adminPage/adminState';
import { AdminUIState } from '../../../state/ui/adminUi';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

 @Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
 
    adminUI?: AdminUIState;
    constructor(public adminState: AdminState){}

  ngOnInit() {
  this.adminUI = new AdminUIState(this.adminState);
  this.adminState.loadProducts();
}
      
}
