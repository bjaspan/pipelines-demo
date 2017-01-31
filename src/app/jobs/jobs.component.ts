import {Component, OnInit} from '@angular/core';
import {PipelinesService} from '../core/services/pipelines.service';
import {ErrorService} from '../core/services/error.service';
import {Job} from "../core/models/job";

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobs: Array<Job> = [];
  lastJob: Job;
  loadingJobs = false;

  constructor(private pipelines: PipelinesService, private errorHandler: ErrorService) {
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loadingJobs = true;
    this.pipelines.getJobsByAppId('app-id')
      .then(jobs => this.jobs = jobs)
      .then(() => this.lastJob = this.jobs[0])
      .catch(e => this.errorHandler.apiError(e))
      .then(() => this.loadingJobs = false);
  }
}
