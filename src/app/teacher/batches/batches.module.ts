import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchesRoutingModule } from './batches-routing.module';
import { BatchesComponent } from './batches.component';

@NgModule({
  imports: [
    CommonModule,
    BatchesRoutingModule
  ],
  declarations: [BatchesComponent]
})
export class BatchesModule { }
