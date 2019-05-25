import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NotFoundcomponentComponent } from './components/not-foundcomponent/not-foundcomponent.component';
import { SalesComponent } from './components/sales/sales.component';


const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'home'},
  {path:'usuarios', component:UserComponent},
  {path:'ventas', component:SalesComponent},
  {path:'productos', component:ProductsComponent},
  {path: 'home', component:HomeComponentComponent},
  {path: '404', component:NotFoundcomponentComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
