import { Injectable, signal } from '@angular/core';
import { Product } from '../shared/models/fieldConfig';
import { ApiServiceService } from '../shared/services/api.service.service';

@Injectable({ providedIn: 'root' })
export class ChangeProductState {
  isLoading = signal(false);
  error = signal<string | null>(null);
  
  product = signal<Product | null>(null);
  categories = signal<any[]>([]);  

  constructor(private apiService: ApiServiceService) {}

 async loadProductDeatils(id: number) {
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
  
  async updateProduct(id: number, updatedData: Partial<Product>) {
    try {
      this.isLoading.set(true);
      this.error.set(null);

      const updatedProduct = await this.apiService.updateProduct(id, updatedData);
      this.product.set(updatedProduct);
      return updatedProduct;
    } catch (err) {
      this.error.set('Failed to update product');
    } finally {
      this.isLoading.set(false);
    }
  }

   async loadCategories() {
    this.isLoading.set(true);
    this.error.set(null);

    try {
      const data = await this.apiService.getAllCategories();   
      this.categories.set(data);
    } catch (err) {
      this.error.set('Failed to load categories');
      console.error(err);
    } finally {
      this.isLoading.set(false);
    }
  }

  async createProduct(newProduct: Partial<Product>) {
  try {
    this.isLoading.set(true);
    this.error.set(null);

    const createdProduct = await this.apiService.createProduct(newProduct);
    this.product.set(createdProduct);
    return createdProduct;
  } catch (err) {
    this.error.set('Failed to create product');
    console.error(err);
  } finally {
    this.isLoading.set(false);
  }
}
 }
