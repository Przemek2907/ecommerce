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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JobListComponent} from "./components/job-list/job-list.component";
import {JobAdComponent} from "./components/job-list/job-ad/job-ad.component";
import {JobAdDetailsComponent} from "./components/job-list/job-ad/job-ad-details/job-ad-details.component";
import { LoginComponent } from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {AuthInterceptorService} from "./services/security/AuthInterceptorService";
import {LoadingSpinner} from "./shared/loading-spinner/loading-spinner";

const applicationRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'products', component: JobListComponent},
  {path: 'products/:id', component: JobAdComponent},
  {path: 'wishlist', canActivate: [AuthGuard], component: WishlistComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppNavigationComponent, JobListComponent, JobAdComponent, ShoppingCartComponent, JobAdDetailsComponent,
    AppComponent, WishlistComponent, ContactComponent, LoginComponent, LoadingSpinner
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot(applicationRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, HttpClient, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
