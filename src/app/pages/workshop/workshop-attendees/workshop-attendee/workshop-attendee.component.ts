import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkshopAttendeeForm } from '../../forms/workshop-attendee-form';
import { FormGroup, Validators } from '@angular/forms';
import { WorkshopAttendeeExperienceLevelMapper } from 'src/app/contracts/enums/workshop-attendee-experience-level';
import { WorkshopLunchChoiceMapper } from 'src/app/contracts/enums/workshop-attendee-lunch-choice';

@Component({
  selector: 'app-workshop-attendee',
  templateUrl: './workshop-attendee.component.html',
  styleUrl: './workshop-attendee.component.scss',
})
export class WorkshopAttendeeComponent {
  @Input({ required: true }) attendeeFrom!: FormGroup<WorkshopAttendeeForm>;
  @Input({ required: true }) index!: number;
  @Output() removeAttendeeEmitter = new EventEmitter<number>();

  protected experienceOptions = Object.entries(
    WorkshopAttendeeExperienceLevelMapper
  ).map(([value, label]) => ({ value, label }));

  protected lunchOptions = Object.entries(WorkshopLunchChoiceMapper).map(
    ([value, label]) => ({ value, label })
  );

  ngOnInit() {
    this.subScribeToDineInOrOut();
  }

  protected removeAttendee = (): void => {
    this.removeAttendeeEmitter.emit(this.index);
  };

  private subScribeToDineInOrOut = (): void => {
    this.attendeeFrom.controls.dineIn.valueChanges.subscribe((value) => {
      if (value) {
        this.attendeeFrom.controls.lunchChoice.addValidators(
          Validators.required
        );
        this.attendeeFrom.controls.lunchChoice.setValue(null);
        this.attendeeFrom.controls.lunchChoice.enable();
      } else {
        this.attendeeFrom.controls.lunchChoice.removeValidators(
          Validators.required
        );
        this.attendeeFrom.controls.lunchChoice.setValue(null);
        this.attendeeFrom.controls.lunchChoice.disable();
      }
    });
  };
}
