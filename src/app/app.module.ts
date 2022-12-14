import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductHomeComponent } from './Products/home/home.component';
import { AddProductComponent } from './Products/add-products/add-product.component';
import { EditProductComponent } from './Products/edit-products/edit-product.component';
import { ViewProductComponent } from './Products/view-product/view-product.component';
import { HomeComponent } from './stocks/home/home.component';
import { AddEmployeeComponent } from './stocks/add-employee/add-employee.component';
import { EditEmployeeComponent } from './stocks/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './stocks/view-employee/view-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LoginComponent,
    routingComponents,
    StoreComponent,
    HomeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,
    ProductHomeComponent,
    AddProductComponent,
    EditProductComponent,
    ViewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
