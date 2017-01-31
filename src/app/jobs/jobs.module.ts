import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JobsRoutingModule} from './jobs-routing.module';
import {JobsComponent} from './jobs.component';
import {JobsDetailComponent} from './jobs-detail/jobs-detail.component';
import {MaterialModule} from '@angular/material';
import {MomentModule} from "angular2-moment";
import {JobListComponent} from './job-list/job-list.component';
import {SharedModule} from "../shared/shared.module";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    MomentModule,
    SharedModule
  ],
  declarations: [JobsComponent, JobsDetailComponent, JobListComponent]
})
export class JobsModule {
}
