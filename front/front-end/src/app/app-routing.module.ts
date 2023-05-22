import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },

{
  path:'', redirectTo:'items', pathMatch:'full'
},
{ 
  path:'**', component:PageNotFoundComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
