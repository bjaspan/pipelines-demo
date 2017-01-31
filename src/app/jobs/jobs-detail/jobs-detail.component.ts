import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.scss']
})
export class JobsDetailComponent implements OnInit {

  logs: Array<any> = [1, 2, 3, 4];
  selectedLog: any;

  constructor() {
  }

  ngOnInit() {
  }

}
