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
      label: 'Jenkins', url: 'https://jenkins.nam.dsone.3ds.com/'
    },
    {
      label: 'Docs', url: 'https://docs.nam.dsone.3ds.com/'
    },
    {
      label: 'Uptime', url: 'https://uptime.nam.dsone.3ds.com/'
    }
  ];
}
