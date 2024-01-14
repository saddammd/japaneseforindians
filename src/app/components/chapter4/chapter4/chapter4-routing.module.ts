import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter4Component } from '../chapter4.component';

const routes: Routes = [
  {
    path:'',
    component: Chapter4Component
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter4RoutingModule { }
