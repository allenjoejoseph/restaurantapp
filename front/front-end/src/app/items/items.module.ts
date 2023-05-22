import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemsComponent,
    AllItemsComponent,
    ViewItemsComponent,
    CartComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }
