import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Work2Component } from './work2/work2.component';
import { MainComponent } from './main/main.component';
import { Work1Component } from './work1/work1.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'main',
    pathMatch:'full'
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'personal-info',
    component: Work1Component
  },
  {
    path:'even-odd',
    component: Work2Component
  },
  {
    path:'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
