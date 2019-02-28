import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTrainingListComponent } from './upcoming-training-list.component';

describe('UpcomingTrainingListComponent', () => {
  let component: UpcomingTrainingListComponent;
  let fixture: ComponentFixture<UpcomingTrainingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTrainingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTrainingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
