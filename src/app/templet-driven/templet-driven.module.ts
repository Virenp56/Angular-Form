import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TempletDrivenRoutingModule } from './templet-driven-routing.module';
import { TemplateFormComponent } from './component/template-form/template-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    TempletDrivenRoutingModule,
    FormsModule
  ]
})
export class TempletDrivenModule { }
