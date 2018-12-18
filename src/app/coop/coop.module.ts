import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CoopComponent } from './coop.component';



@NgModule({
  declarations: [
    DetailsComponent,
    EditComponent,
    CoopComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DetailsComponent,
    EditComponent
  ]
})
export class CoopModule { }
