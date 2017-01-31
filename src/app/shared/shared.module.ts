import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobStatusComponent} from './job-status/job-status.component';
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [JobStatusComponent],
  exports: [JobStatusComponent]
})
export class SharedModule {
}
