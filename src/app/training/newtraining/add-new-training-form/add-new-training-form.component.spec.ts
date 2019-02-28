import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTrainingFormComponent } from './add-new-training-form.component';

describe('AddNewTrainingFormComponent', () => {
  let component: AddNewTrainingFormComponent;
  let fixture: ComponentFixture<AddNewTrainingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTrainingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTrainingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
