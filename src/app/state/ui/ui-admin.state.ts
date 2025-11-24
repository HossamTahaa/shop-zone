import { signal, computed } from '@angular/core';
 import { AdminState } from '../adminState';

export class UiAdminState  {
  currentPage = signal(1);
  pageSize = 20;  

  constructor(private adminState: AdminState) {}

  // Pagination
  paginatedProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.adminState.products().slice(start, start + this.pageSize);
  });

  totalPages = computed(() => {
    return Math.ceil(this.adminState.products().length / this.pageSize) || 1;
  });

   nextPage = () => this.currentPage.update(p => p < this.totalPages() ? p + 1 : p);
  prevPage = () => this.currentPage.update(p => p > 1 ? p - 1 : p);
}
