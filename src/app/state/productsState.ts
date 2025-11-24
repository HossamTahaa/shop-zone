import { Injectable, signal } from '@angular/core';
 import { ApiServiceService } from '../shared/services/api.service.service';
import { Product } from '../shared/models/fieldConfig';

@Injectable({
  providedIn: 'root',
})
export class ProductsState {
  isLoading = signal(false);
  error = signal<string | null>(null);
  products = signal<Product[]>([]);
  filters = signal({
    categoryId: 0,
    price_min: 0,
    price_max: 0,
  });

  constructor(private productService: ApiServiceService) {}

  async loadProducts() {
    this.isLoading.set(true);
    this.error.set(null);
    try {
      const data = await this.productService.getAllProducts();
      this.products.set(data);
    } catch (error: any) {
      this.error.set('Failed to load products');
      console.error(error);
    } finally {
      this.isLoading.set(false);
    }
  }

  updateFilter(newFilters: any) {
    this.filters.set({
      ...this.filters(),
      ...newFilters,
    });
  }

  async applyFilters() {
    this.isLoading.set(true);
    const data = await this.productService.getFilteredProducts(this.filters());
    this.products.set(data);
    this.isLoading.set(false);

    const filters = this.filters();

    const filterd = data.filter((p: any) => {
      const minFilter = filters.price_min ? p.price >= filters.price_min : true;
      const maxFilter = filters.price_max ? p.price <= filters.price_max : true;
      return minFilter && maxFilter;
    });
    this.products.set(filterd);
    this.isLoading.set(false);
  }
}
