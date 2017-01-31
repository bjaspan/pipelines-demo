import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {JobsComponent} from './jobs.component';
import {JobsDetailComponent} from './jobs-detail/jobs-detail.component';

const routes: Routes = [{
  path: ':app', component: JobsComponent
}, {
  path: ':app/:id', component: JobsDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class JobsRoutingModule {
}
