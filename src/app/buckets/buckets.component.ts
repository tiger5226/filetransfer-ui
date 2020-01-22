import {Component, Input, OnInit} from '@angular/core';
import {Bucket} from './model/bucket';
import {HttpParams} from '@angular/common/http';
import {RestService} from '../rest.service';
import {MessageService} from 'primeng/api';
import {BucketFile} from './model/bucket-file';
import {environment} from '../../environments/environment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.css']
})
export class BucketsComponent implements OnInit {
  buckets: Bucket[];
  @Input()
  bucketFilter: string;
  bucketFileColumns = [
    {field: 'Name', header: 'Name'},
    {field: 'Size', header: 'Size'},
    {field: 'ModifiedAt', header: 'ModifiedAt'}];

  constructor(public rest: RestService, private messageService: MessageService, private activatedroute: ActivatedRoute) {
    this.activatedroute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.bucketFilter = String(params.get('id'));
      }

      this.loadBuckets();
    });
  }

  ngOnInit() {
    // this.loadBuckets();
  }

  public loadBuckets() {
    const newBuckets = [];
    let params = new HttpParams();

    if (this.bucketFilter) {
      params = params.set('bucket', this.bucketFilter);
    }

    this.rest.get('bucket', 'list', params).subscribe((response) => {
      if (!response.data) {
        return;
      }
      response.data.forEach((b) => {
        console.log('Bucket:', b);
        const bucket = new Bucket();
        bucket.Name = b.Name;
        let totalSize = 0;
        b.Files.forEach((f) => {
            console.log('File:', f);
            const file = new BucketFile();
            file.Name = f.Name;
            file.Size = f.Size;
            totalSize = totalSize + file.Size;
            file.ModifiedAt = new Date(f.ModifiedAt);
            bucket.Files.push(file);
          });
        bucket.Header = bucket.Files.length.toString() + ' files totalling ' + (totalSize / 1000).toString() + 'KB';
        newBuckets.push(bucket);
      });
      this.buckets = newBuckets;
    });
  }

  public download(bucket: Bucket, file: BucketFile) {
    window.open(environment.apiURL + '/download?file=' + bucket.Name + '/' + file.Name );
  }
}
