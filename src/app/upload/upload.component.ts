import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadedFiles: any[] = [];
  baseURL: string;
  uploadURL: string;
  bucket: string;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit() {
    this.baseURL = environment.simplefturl;
    console.log('baseurl:', this.baseURL);
    this.bucket = 'test';
  }

  onBeforeUpload(event) {
    this.uploadURL = this.baseURL + this.bucket;
    console.log('uploadurl' + this.uploadURL);
  }

}
