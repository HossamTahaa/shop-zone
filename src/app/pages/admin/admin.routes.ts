import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ChangeProductPageComponent } from './change-product-page/change-product-page.component'; 
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProductDeatilsPageComponent } from './product-deatils-page/product-deatils-page.component';
import { ProductListingPageComponent } from './product-listing-page/product-listing-page.component';

const routes: Routes = [ 
 {
    path: '',
    component: AdminComponent,
    children: [
        { path: '', redirectTo: 'product-listing-page', pathMatch: 'full' }, 
        { path:'admin-page', component: AdminPageComponent},
        { path:'change-product-page/:id' , component: ChangeProductPageComponent},
        { path: 'change-product-page', component: ChangeProductPageComponent },
        { path:'product-deatils-page/:id' , component: ProductDeatilsPageComponent},
        { path:'product-listing-page' , component: ProductListingPageComponent},
    ]
 }
];
export default routes;
 