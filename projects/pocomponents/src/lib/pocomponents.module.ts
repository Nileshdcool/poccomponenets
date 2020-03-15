import { NgModule } from '@angular/core';
import { POComponentsComponent } from './pocomponents.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { LabelComponent } from './label/label.component';



@NgModule({
  declarations: [POComponentsComponent, LabelComponent],
  imports: [
    MaterialModule,
    FormsModule,
  ],
  exports: [POComponentsComponent, LabelComponent]
})
export class POComponentsModule { }
