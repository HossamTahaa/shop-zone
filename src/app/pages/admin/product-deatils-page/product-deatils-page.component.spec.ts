import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeatilsPageComponent } from './product-deatils-page.component';

describe('ProductDeatilsPageComponent', () => {
  let component: ProductDeatilsPageComponent;
  let fixture: ComponentFixture<ProductDeatilsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDeatilsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDeatilsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
