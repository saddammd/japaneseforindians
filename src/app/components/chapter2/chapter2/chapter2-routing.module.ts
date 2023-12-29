import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter2Component } from '../chapter2.component';

const routes: Routes = [
  {
    path:'',
    component: Chapter2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chapter2RoutingModule { }
