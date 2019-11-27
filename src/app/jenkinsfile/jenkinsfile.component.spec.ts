import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsfileComponent } from './jenkinsfile.component';

describe('JenkinsfileComponent', () => {
  let component: JenkinsfileComponent;
  let fixture: ComponentFixture<JenkinsfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
