import { Injectable, signal } from '@angular/core';
import { Product } from '../shared/models/fieldConfig';
import { ApiServiceService } from '../shared/services/api.service.service';
 
@Injectable({ providedIn: 'root' })
export class AdminState {

  isLoading = signal(false);
  error = signal<string | null>(null);

  // original products
  products = signal<Product[]>([]);

  constructor(private api: ApiServiceService) {}

  // Load all products
  async loadProducts() {
    try {
      this.isLoading.set(true);
      this.error.set(null);

      const data = await this.api.getAllProducts();
      this.products.set(data);
    } catch (err) {
      this.error.set('Failed to load products');
    } finally {
      this.isLoading.set(false);
    }
  }
}
