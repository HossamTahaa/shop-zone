import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDeatilsState } from '../../../state/productDeatils/productDeatils';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/fieldConfig';
import { Router } from '@angular/router';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
@Component({
  selector: 'app-product-deatils-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingComponent],
  templateUrl: './product-deatils-page.component.html',
  styleUrl: './product-deatils-page.component.scss',
})
export class ProductDeatilsPageComponent {
  constructor(private router: Router,private route: ActivatedRoute, public productDeatilsState: ProductDeatilsState) {}
   
  product?:Product;

   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productDeatilsState.loadProductDetails(id);
    console.log('Product ID:', id);
   }
   goToProducts(){
    this.router.navigate(['/admin/product-listing-page'])
   }
}
