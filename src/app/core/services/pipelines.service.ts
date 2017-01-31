import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';
import {Job} from "../models/job";

@Injectable()
export class PipelinesService {

  URI = `${environment.apiEndpoint}`;

  constructor(private http: Http) {
  }

  getJobsByAppId(appId: string, params = {}) {
    return this.promiseGetRequest(this.URI + `/ci/jobs?app=${appId}`, params).then(r => r.jobs.map(j => new Job(j)));
  }

  getJobByJobId(jobId: string, params = {}) {
    return this.promiseGetRequest(this.URI + `/ci/jobs/${jobId}`, params).then(r => r.job);
  }

  getLogFile(jobId: string, params) {
    return this.promiseGetRequest(this.URI + `/ci/jobs/${jobId}/get_logs`, params);
  }

  promiseGetRequest(url, params) {
    return this.http.get(url, params).map(r => r.json()).toPromise();
  }
}
