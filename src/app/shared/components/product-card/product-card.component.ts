import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/fieldConfig';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  constructor(private router: Router) {}

  @Input() product!: Product;
 
  goToDeatils() {
    this.router.navigate(['/admin/product-deatils-page',this.product.id], {
     });
  }
}  
