import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminState } from '../../../state/adminState';
import { UiAdminState } from '../../../state/ui/ui-admin.state';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

 @Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
 
    adminUI?: UiAdminState;
    constructor(public adminState: AdminState){}

  ngOnInit() {
  this.adminUI = new UiAdminState(this.adminState);
  this.adminState.loadProducts();
}

}
