import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GithubService} from './services/github.service';
import {PipelinesService} from './services/pipelines.service';
import {StorageService} from './services/storage.service';
import {N3Service} from './services/n3.service';
import {ErrorService} from './services/error.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GithubService, PipelinesService, StorageService, N3Service, ErrorService],
  declarations: []
})
export class CoreModule {
}
