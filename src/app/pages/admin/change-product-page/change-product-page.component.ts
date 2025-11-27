import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeProductState } from '../../../state/change.product.state';
import { FormComponent } from '../../../shared/components/form/form.component';
import { FieldConfig } from '../../../shared/models/fieldConfig';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/fieldConfig';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';
@Component({
  selector: 'app-change-product-page',
  standalone: true,
  imports: [CommonModule, FormsModule, FormComponent, LoadingComponent],
  templateUrl: './change-product-page.component.html',
  styleUrl: './change-product-page.component.scss',
})
export class ChangeProductPageComponent {
  productId?: number;
  pageTitle = 'Create Product';
  buttonText = 'Create';
  formFields: FieldConfig[] = [];

  constructor(
    private route: ActivatedRoute,
    public state: ChangeProductState
  ) {}
  async ngOnInit() {
    await this.loadPageMode();
  }

  private async loadPageMode() {
    await this.state.loadCategories();

    const id = this.route.snapshot.paramMap.get('id');
    const categorise = this.state.categories();

    if (!id) {
      // Create mode
      this.initFormFields(undefined, categorise);
      return;
    }

    // Edit mode
    this.productId = Number(id);
    this.pageTitle = 'Update Product';
    this.buttonText = 'Update';

    await this.state.loadProductDeatils(this.productId);
    const product = this.state.product();
    if (product && categorise) {
      this.initFormFields(product, categorise);
    }
  }

  private initFormFields(product?: Product, categories: any[] = []) {
    this.formFields = [
      {
        accessor: 'title',
        displayName: 'Title',
        type: 'text',
        value: product?.title ?? '',
        validations: [{ type: 'required', message: 'Title is required' }],
      },
      {
        accessor: 'description',
        displayName: 'Description',
        type: 'textarea',
        value: product?.description ?? '',
        validations: [{ type: 'required', message: 'Description is required' }],
      },
      {
        accessor: 'price',
        displayName: 'Price',
        type: 'number',
        value: product?.price ?? '',
        validations: [{ type: 'required', message: 'Price is required' }],
      },
      {
        accessor: 'images',
        displayName: 'Image URL',
        type: 'text',
        value: product?.images?.[0] ?? '',
        validations: [{ type: 'required', message: 'Image URL is required' }],
      },
      {
        accessor: 'categoryId',
        displayName: 'Category',
        type: 'select',
        value: product?.category?.id ?? '',
        options: categories.map((cat) => ({
          value: String(cat.id),
          view: cat.name,
        })),
      },
    ];
  }

  async handleSubmit(formValue: any) {
    const payload = {
      ...formValue,
      imagess: [formValue.images],
      categoryId: Number(formValue.categoryId),
    };

    if (this.productId) {
      await this.state.updateProduct(this.productId, payload);
    } else {
      await this.state.createProduct(payload);
    }
  }
}
