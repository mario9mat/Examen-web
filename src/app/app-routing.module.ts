import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibrosComponent} from '../app/components/libros/libros.component';
import {HomeComponent} from '../app/components/home/home.component';
import {QuejasComponent} from '../app/components/quejas/quejas.component';
import {MnsjComponent} from '../app/components/mnsj/mnsj.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'libros', component:LibrosComponent},
  {path: 'quejas',component:QuejasComponent},
  {path: 'mnsj',component:MnsjComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
