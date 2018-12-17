import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    DetailsComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DetailsComponent,
    EditComponent,
  ]
})
export class AppModule { }
