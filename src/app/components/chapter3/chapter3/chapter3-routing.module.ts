import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter3Component } from '../chapter3.component';

const routes: Routes = [
  {
    path:'',
    component: Chapter3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter3RoutingModule { }
