import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from 'primeng/api';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {FileUpload} from 'primeng/primeng';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @ViewChild('uploader', null) uploadComp: FileUpload;

  uploadedFiles: any[] = [];
  baseURL: string;
  uploadURL: string;
  completed = 0;
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
    this.baseURL = environment.apiURL + environment.simplefturl;
    this.bucket = 'test';
  }

  onProgress(event) {
    this.completed = event.progress;
  }

  onUpload(event) {
    this.uploadComp.clear();
  }

}
