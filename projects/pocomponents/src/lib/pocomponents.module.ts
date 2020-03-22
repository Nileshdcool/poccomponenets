import { NgModule } from '@angular/core';
import { POComponentsComponent } from './pocomponents.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelComponent } from './label/label.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { PasswordComponent } from './password/password.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [POComponentsComponent, LabelComponent,
    ToolbarComponent, EmailInputComponent, GenericInputComponent, TextAreaComponent, PasswordComponent, ButtonComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [POComponentsComponent, LabelComponent, ToolbarComponent, EmailInputComponent,
    GenericInputComponent, TextAreaComponent, PasswordComponent, ButtonComponent]
})
export class POComponentsModule { }
