import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopAttendeeComponent } from './workshop-attendee.component';

describe('WorkshopAttendeeComponent', () => {
  let component: WorkshopAttendeeComponent;
  let fixture: ComponentFixture<WorkshopAttendeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopAttendeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
