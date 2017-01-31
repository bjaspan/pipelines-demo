import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {

  constructor() {
  }

  apiError(e: Error) {
    // TODO
    console.error(e);
  }
}
