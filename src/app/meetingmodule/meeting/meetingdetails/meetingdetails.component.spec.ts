import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingdetailsComponent } from './meetingdetails.component';

describe('MeetingdetailsComponent', () => {
  let component: MeetingdetailsComponent;
  let fixture: ComponentFixture<MeetingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
