import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopAttendeesComponent } from './workshop-attendees.component';

describe('WorkshopAttendeesComponent', () => {
  let component: WorkshopAttendeesComponent;
  let fixture: ComponentFixture<WorkshopAttendeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopAttendeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
