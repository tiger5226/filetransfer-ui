import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { BucketsComponent } from './buckets/buckets.component';
import {Routes, RouterModule} from '@angular/router';
import {FileUploadModule} from 'primeng/fileupload';
import {MessageService} from 'primeng/api';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {AccordionModule, DropdownModule, FieldsetModule, InplaceModule, MenubarModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { JenkinsfileComponent } from './jenkinsfile/jenkinsfile.component';

/* Import the language you need to highlight */
import 'prismjs';
import 'prismjs/components/prism-json.js';
import { PrismComponent } from './prism/prism.component';
import {ToastModule} from 'primeng/toast';

const appRoutes: Routes = [
  {path: 'download', component: DownloadComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'jenkinsfile', component: JenkinsfileComponent},
  {path: '', component: BucketsComponent },
  {path: 'buckets', component: BucketsComponent },
  {path: 'buckets/:id', component: BucketsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DownloadComponent,
    BucketsComponent,
    JenkinsfileComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    FormsModule,
    AccordionModule,
    TableModule,
    InplaceModule,
    DropdownModule,
    FieldsetModule,
    ToastModule,
    MenubarModule,
  ],
  providers: [ HttpClient, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
