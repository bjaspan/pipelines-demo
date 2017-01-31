/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {PipelinesService} from './pipelines.service';
import {HttpModule} from '@angular/http';

describe('PipelinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PipelinesService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([PipelinesService], (service: PipelinesService) => {
    expect(service).toBeTruthy();

  }));
});
