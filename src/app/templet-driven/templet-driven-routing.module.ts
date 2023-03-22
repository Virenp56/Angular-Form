import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './component/template-form/template-form.component';

const routes: Routes = [{ path: "", redirectTo: 'template', pathMatch: "full" }, {
  path: "template", component: TemplateFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TempletDrivenRoutingModule { }
