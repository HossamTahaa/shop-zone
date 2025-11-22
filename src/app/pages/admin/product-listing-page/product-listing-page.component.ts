import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsState } from '../../../state/productsState/productsState';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { SidebarFilterComponent } from '../../../shared/components/sidebar-filter/sidebar-filter.component';
import { ProductsUIState } from '../../../state/ui/ui.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-listing-page',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ProductCardComponent,SidebarFilterComponent],
  templateUrl: './product-listing-page.component.html',
  styleUrls: ['./product-listing-page.component.scss'],
})
export class ProductListingPageComponent {
  uiState: ProductsUIState;
  constructor(private router: Router,public productsState: ProductsState) {
    this.uiState = new ProductsUIState(productsState);
  }
   ngOnInit(): void {
    this.productsState.loadProducts();
  }
   onApplayFilter(filters:any){
     this.productsState.updateFilter(filters)
      this.productsState.applyFilters();
   }
     goToadminPage(){
    this.router.navigate(['/admin/admin-page'])
   }
}
