import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"products",
    component:ProductCrudComponent
  },
  {
    path:"products/create",
    component:ProductCreateComponent
  },
  {
    path:"products/update/:id",
    component:ProductsUpdateComponent
  },
  {
    path:"products/delete/:id",
    component:ProductsDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
