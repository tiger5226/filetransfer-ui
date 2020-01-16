import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SimpleFT';
  links = [
    {
      label: 'Home', routerLink: ['']
    },
    {
      label: 'Upload', routerLink: ['/upload']
    },
    {
      label: 'DQ-CI', url: 'https://jenkins.nam.dsone.3ds.com/'
    }
  ];
}
