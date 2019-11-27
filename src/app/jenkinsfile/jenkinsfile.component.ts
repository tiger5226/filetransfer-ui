import { Component, OnInit } from '@angular/core';
import {Jenkinsfile} from './model/jenkinsfile';
import {HttpParams} from '@angular/common/http';
import {Bucket} from '../browse/model/bucket';
import {BucketFile} from '../browse/model/bucket-file';
import {RestService} from '../rest.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-jenkinsfile',
  templateUrl: './jenkinsfile.component.html',
  styleUrls: ['./jenkinsfile.component.css']
})
export class JenkinsfileComponent implements OnInit {

  selectedJenkinsfile: Jenkinsfile;
  jenkinsfileList: Jenkinsfile[] = [];
  projectKey: string;
  repo: string;
  branch: string;
  user: string;

  constructor(public rest: RestService, private messageService: MessageService) { }

  ngOnInit() {
    this.loadJenkinsfiles();
  }

  public loadJenkinsfiles() {
    const newJenkinsfiles = [];
    this.rest.get('jenkinsfile', 'list', new HttpParams()).subscribe((response) => {
      response.data.forEach((b) => {
        console.log('Jenkinsfile:', b);
        const jenkinsfile = new Jenkinsfile();
        jenkinsfile.Name = b.Name;
        jenkinsfile.Content = b.Contents;
        newJenkinsfiles.push(jenkinsfile);
      });
      this.jenkinsfileList = newJenkinsfiles;
    });
  }

  addJenkinsfile($event: any) {
    const params = new HttpParams().
    set('content', this.selectedJenkinsfile.Content).
    set('repository', this.repo).
    set('branch', this.branch).
    set('project', this.projectKey).
    set('user', this.user);
    this.rest.get('jenkinsfile', 'publish', params).subscribe((response) => {});
  }
}
