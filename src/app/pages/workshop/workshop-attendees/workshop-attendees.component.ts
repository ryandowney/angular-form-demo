import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { WorkshopAttendee } from 'src/app/contracts/workshop-attendee';
import { WorkshopFormNames } from '../forms/workshop-form-names';
import { WorkshopAttendeeForm } from '../forms/workshop-attendee-form';
import { emptyGuid } from 'src/app/const';

@Component({
  selector: 'app-workshop-attendees',
  templateUrl: './workshop-attendees.component.html',
  styleUrls: ['./workshop-attendees.component.scss'],
})
export class WorkshopAttendeesComponent implements OnInit {
  constructor(private parent: FormGroupDirective) {}

  @Input({ required: true }) attendees!: WorkshopAttendee[];

  private parentForm!: FormGroup;
  private formName = WorkshopFormNames.Attendees;

  ngOnInit() {
    this.setupForm();
  }

  protected get workRequestAttendeesForm(): FormArray<
    FormGroup<WorkshopAttendeeForm>
  > {
    return this.parentForm.get(this.formName) as FormArray<
      FormGroup<WorkshopAttendeeForm>
    >;
  }

  protected removeAttendee = (index: number): void => {
    this.workRequestAttendeesForm.removeAt(index);
  };

  protected addAttendee = (): void => {
    this.workRequestAttendeesForm.push(
      this.buildAttendeeForm(<WorkshopAttendee>this.blankAttendee)
    );
  };

  private setupForm = (): void => {
    this.parentForm = this.parent.form;
    this.parentForm.setControl(
      this.formName,
      this.buildFormArray(this.attendees)
    );
  };

  private buildFormArray = (
    attendees: WorkshopAttendee[]
  ): FormArray<FormGroup<WorkshopAttendeeForm>> => {
    return new FormArray<FormGroup<WorkshopAttendeeForm>>(
      attendees.map((attendee) => this.buildAttendeeForm(attendee))
    );
  };

  private buildAttendeeForm = (
    attendee: WorkshopAttendee
  ): FormGroup<WorkshopAttendeeForm> => {
    const lunchChoiceValidators = attendee.dineIn ? [Validators.required] : [];

    return new FormGroup<WorkshopAttendeeForm>({
      id: new FormControl(attendee.id, Validators.required),
      name: new FormControl(attendee.name, Validators.required),
      experience: new FormControl(attendee.experience, Validators.required),
      dineIn: new FormControl(attendee.dineIn, Validators.required),
      lunchChoice: new FormControl(
        { value: attendee.lunchChoice, disabled: !attendee.dineIn },
        lunchChoiceValidators
      ),
    });
  };

  private get blankAttendee(): Nullable<WorkshopAttendee> {
    return {
      id: emptyGuid,
      name: null,
      experience: null,
      dineIn: null,
      lunchChoice: null,
    };
  }
}
