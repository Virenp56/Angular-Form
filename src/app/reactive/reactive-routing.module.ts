import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

const routes: Routes = [{ path: "", redirectTo: 'reactive', pathMatch: "full" }, {
  path: "reactive", component: ReactiveFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }