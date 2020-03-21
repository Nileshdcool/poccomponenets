import { NgModule } from '@angular/core';
import { POComponentsComponent } from './pocomponents.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from './label/label.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {EmailInputComponent} from './email-input/email-input.component';

@NgModule({
  declarations: [POComponentsComponent, LabelComponent, ToolbarComponent, EmailInputComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [POComponentsComponent, LabelComponent, ToolbarComponent, EmailInputComponent]
})
export class POComponentsModule { }
