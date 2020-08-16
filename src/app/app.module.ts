import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppNavigationComponent } from './components/navigation/app-navigation.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ContactComponent } from './components/contact/contact.component';
import {AuthGuard} from './services/security/AuthGuard';
import {AuthService} from './services/security/AuthService';
import {FormsModule} from '@angular/forms';
import {JobListComponent} from "./components/job-list/job-list.component";
import {JobAdComponent} from "./components/job-list/job-ad/job-ad.component";
import {JobAdDetailsComponent} from "./components/job-list/job-ad/job-ad-details/job-ad-details.component";

const applicationRoutes: Routes = [
  {path: 'products', component: JobListComponent},
  {path: 'products/:id', component: JobAdComponent},
  {path: 'wishlist', canActivate: [AuthGuard], component: WishlistComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppNavigationComponent, JobListComponent, JobAdComponent, ShoppingCartComponent, JobAdDetailsComponent,
    AppComponent, WishlistComponent, ContactComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
