import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { WorkshopAttendee } from 'src/app/contracts/workshop-attendee';
import { WorkshopFormNames } from '../workshop-form-names';

@Component({
  selector: 'app-workshop-attendees',
  templateUrl: './workshop-attendees.component.html',
  styleUrls: ['./workshop-attendees.component.scss'],
})
export class WorkshopAttendeesComponent {
  constructor(private parent: FormGroupDirective) {}

  @Input({ required: true }) attendees!: WorkshopAttendee[];

  private parentForm!: FormGroup;
  private formName = WorkshopFormNames.Attendees;
}
