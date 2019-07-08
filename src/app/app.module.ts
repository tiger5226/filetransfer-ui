import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { BrowseComponent } from './browse/browse.component';
import {Routes, RouterModule} from '@angular/router';
import {FileUploadModule} from 'primeng/fileupload';
import {MessageService} from 'primeng/api';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'app/download', component: DownloadComponent},
  {path: 'app/upload', component: UploadComponent},
  {path: 'app', component: BrowseComponent },
  {path: '', redirectTo: '/app' },
];

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DownloadComponent,
    BrowseComponent
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
  ],
  providers: [ HttpClient, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
