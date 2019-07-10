import {Component, Input, OnInit} from '@angular/core';
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
  private bucketValue: string;
  set bucket(value: string) {
    this.bucketValue = value;
    this.uploadURL = this.baseURL + this.bucket;
  }
  get bucket() {
    return this.bucketValue;
  }

  constructor(private http: HttpClient, private messageService: MessageService) { }

  ngOnInit() {
    this.baseURL = environment.simplefturl;
    console.log('baseurl:', this.baseURL);
    this.bucket = 'test';
  }

  onBeforeUpload(event) {
    this.uploadURL = this.baseURL + this.bucket;
    console.log('BEFOREUPLOAD: uploadurl' + this.uploadURL);
  }

  onSelect(event) {
    this.uploadURL = this.baseURL + this.bucket;
    console.log('ONSELECT uploadurl' + this.uploadURL);
  }

}
