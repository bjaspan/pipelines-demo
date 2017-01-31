import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-job-status',
  templateUrl: './job-status.component.html',
  styleUrls: ['./job-status.component.scss']
})
export class JobStatusComponent implements OnInit {

  @Input()
  status: string;

  constructor() {
  }

  ngOnInit() {
  }

}
