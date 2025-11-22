import { signal, computed } from '@angular/core';
import { ProductsState } from '../productsState/productsState';

export class ProductsUIState {
  currentPage = signal(1);
  pageSize = signal(9);

  constructor(private productsState: ProductsState) {}

   paginatedProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    return this.productsState.products().slice(start, start + this.pageSize());
  });
     
  totalPages = computed(() => {
    const total = Math.ceil(
      this.productsState.products().length / this.pageSize()
    );
    return total || 1;
   });
  
   nextPage = () => this.currentPage.update(page => page < this.totalPages() ? page + 1 : page);
   prevPage = () => this.currentPage.update(page => page > 1 ? page - 1 : page );
}

