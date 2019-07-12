import {BucketFile} from './bucket-file';

export class Bucket {
  Name: string;
  Header: string;
  Files: BucketFile[] = [];
}
