import {Component, OnInit, Input} from '@angular/core';
import {Job} from "../../core/models/job";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  @Input()
  jobs: Array<Job>;

  constructor() {
  }

  ngOnInit() {
  }

}
