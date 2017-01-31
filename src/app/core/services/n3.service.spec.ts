/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {N3Service} from './n3.service';

describe('N3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [N3Service]
    });
  });

  it('should ...', inject([N3Service], (service: N3Service) => {
    expect(service).toBeTruthy();
  }));
});
