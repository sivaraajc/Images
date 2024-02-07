import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpostComponent } from './adminpost/adminpost.component';
import { HomeComponent } from './home/home.component';
import { IqooComponent } from './iqoo/iqoo.component';

const routes: Routes = [
  {path:"admin",component:AdminpostComponent},{path:"",component:HomeComponent},
  {path:"iqoo",component:IqooComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
