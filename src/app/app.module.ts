import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppNavigationComponent } from './components/navigation/app-navigation.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProductListComponent} from './components/product-list/product-list.component';
import { ProductComponent } from './components/product-list/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/product-list/product/product-details/product-details.component';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ContactComponent } from './components/contact/contact.component';
import {AuthGuard} from './services/security/AuthGuard';
import {AuthService} from './services/security/AuthService';

const applicationRoutes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductComponent},
  {path: 'wishlist', canActivate: [AuthGuard], component: WishlistComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppNavigationComponent, ProductListComponent, ProductComponent, ShoppingCartComponent, ProductDetailsComponent,
    AppComponent, WishlistComponent, ContactComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
