import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  "path": 'ractive-form', loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
},
{
  "path": 'template-form', loadChildren: () => import('./templet-driven/templet-driven.module').then(m => m.TempletDrivenModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
