import { Product } from './../../models/fieldConfig';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 import { ApiServiceService } from '../../services/api.service.service';
@Component({
  selector: 'app-sidebar-filter',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sidebar-filter.component.html',
  styleUrl: './sidebar-filter.component.scss'
})
export class SidebarFilterComponent {
  categoryId?: any = "";
  price_min?: any;
  price_max?: any;
  categories: any[] = [];

   constructor (private api: ApiServiceService){}

     async ngOnInit(){
     this.categories = await this.api.getAllCategories();
    }


   @Output() applyFilters = new EventEmitter<any>();

  onApply() {
    this.applyFilters.emit({
      categoryId: this.categoryId ,
      price_min: this.price_min,
      price_max: this.price_max,
     });
  }
    onReset() {
     this.categoryId = ""; 
     this.price_min = null;
     this.price_max = null;
     this.applyFilters.emit({
      categoryId: this.categoryId ,
      price_min: this.price_min,
      price_max: this.price_max,
     })
    }
}
