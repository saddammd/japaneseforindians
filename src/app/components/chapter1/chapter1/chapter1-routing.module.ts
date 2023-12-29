import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter1Component } from '../chapter1.component';

const routes: Routes = [
  {
    path:'',
    component: Chapter1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter1RoutingModule { }
