import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from './card/card.component';
import {MaterialModule} from "@angular/material";
import 'hammerjs';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [CardComponent],
  exports:[CardComponent]
})
export class SharedModule { }
