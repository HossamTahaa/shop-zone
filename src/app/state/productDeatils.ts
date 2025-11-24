import { Injectable, signal } from '@angular/core';
 import { ApiServiceService } from '../shared/services/api.service.service';
import { Product } from '../shared/models/fieldConfig';

@Injectable({
  providedIn: 'root',
})

export class ProductDeatilsState{
  isLoading = signal(false);
  error = signal<string | null>(null);
  product = signal<Product | null>(null);  

  constructor( private apiService:ApiServiceService){}


  async loadProductDetails(id: number) {
    this.isLoading.set(true);
    this.error.set(null);
    try {
      const data = await this.apiService.getProductDetails(id);
      this.product.set(data);
    } catch (error: any) {
      this.error.set('Failed to load product details');
      console.error(error);
    } finally {
      this.isLoading.set(false);
    }
  }
    clearProduct() {
    this.product.set(null);
  }
}