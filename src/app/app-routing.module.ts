import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChaptersComponent } from './components/chapters/chapters.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'chapters', component: ChaptersComponent,
    children: [
      {
      path: 'chapter1',
      loadChildren: () => import('./components/chapter1/chapter1/chapter1.module').then(m => m.Chapter1Module)
      },
      {
        path: 'chapter2',
        loadChildren:()=> import('./components/chapter2/chapter2/chapter2.module').then(m=> m.Chapter2Module)
      },
      {
        path: 'chapter3',
        loadChildren:()=> import('./components/chapter3/chapter3/chapter3.module').then(m=> m.Chapter3Module)
      },
      {
        path: 'chapter4',
        loadChildren:()=> import('./components/chapter4/chapter4/chapter4.module').then(m=> m.Chapter4Module)
      }
  
  ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
