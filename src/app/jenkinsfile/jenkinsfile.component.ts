import { Component, OnInit } from '@angular/core';
import {Jenkinsfile} from './model/jenkinsfile';
import {HttpParams} from '@angular/common/http';
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
  repositoryProjectsLink = 'https://repository.quintiq.nl/projects';

  constructor(public rest: RestService, private messageService: MessageService) { }

  ngOnInit() {
    this.loadJenkinsfiles();
  }

  public loadJenkinsfiles() {
    const newJenkinsfiles = [];
    this.rest.get('jenkinsfile', 'list', new HttpParams()).subscribe((response) => {
      response.data.forEach((b, index) => {
        console.log('Jenkinsfile:', b);
        const jenkinsfile = new Jenkinsfile();
        jenkinsfile.Name = b.Name;
        jenkinsfile.Content = b.Contents;
        // add the Jenkinsfile option
        newJenkinsfiles.push(jenkinsfile);
        // always select the first result by default.
        if (index === 0) {
          this.selectedJenkinsfile = jenkinsfile;
        }
      });
      this.jenkinsfileList = newJenkinsfiles;
    });
  }

  addJenkinsfile() {
    const params = new HttpParams().
    set('content', this.selectedJenkinsfile.Content).
    set('repository', this.repo).
    set('branch', this.branch).
    set('project', this.projectKey).
    set('user', this.user);
    this.rest.get('jenkinsfile', 'publish', params).subscribe({
      complete: () => {
        this.messageService.add(
          { severity: 'success',
            summary: 'Jenkinsfile published.',
            detail: `Successfully committed the Jenkinsfile to the ${this.branch} branch of ${this.repo}.` });
      }
    });
  }
}
