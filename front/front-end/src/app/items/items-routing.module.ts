import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
{ 
  path: '', component: AllItemsComponent
},
{ 
  path:'view-items/:id', component:ViewItemsComponent
},
{
   path:'cart', component:CartComponent
},
{
  path:'contact', component:ContactUsComponent
},
{
  path:'login', component:LoginComponent
},
{
  path:'register', component:RegisterComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
