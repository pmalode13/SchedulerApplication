import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmeetingComponent } from './newmeeting.component';

describe('NewmeetingComponent', () => {
  let component: NewmeetingComponent;
  let fixture: ComponentFixture<NewmeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
