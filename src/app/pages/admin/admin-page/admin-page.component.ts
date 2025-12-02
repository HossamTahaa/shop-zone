import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminState } from '../../../state/adminState';
import { UiAdminState } from '../../../state/ui/ui-admin.state';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
  adminUI?: UiAdminState;
  constructor(private router: Router, public adminState: AdminState) {}
  ngOnInit() {
    this.adminUI = new UiAdminState(this.adminState);
    this.adminState.loadProducts();
  }

  trackByProductId(product: any): number {
    return product.id;
  }
  goToView(id: number) {
    this.router.navigate(['/admin/product-deatils-page', id]);
  }
  goToEdit(id: number) {
    this.router.navigate(['/admin/change-product-page',id]);
  }
  goToDelete(id: number) {}
}
