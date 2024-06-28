import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { WorkshopFormNames } from '../workshop-form-names';
import { Workshop } from 'src/app/contracts/workshop';
import { emptyGuid } from 'src/app/const';

@Component({
  selector: 'app-workshop-details',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.scss'],
})
export class WorkshopDetailsComponent implements OnInit {
  constructor(private parent: FormGroupDirective) {}

  @Input({ required: true }) workshop!: Workshop;

  private parentForm!: FormGroup;
  private formName = WorkshopFormNames.Details;
  instructors: Instructor[] = [
    { name: 'Ryan Downey', value: '9e50e55f-37ec-4d2a-ba65-3746b63e79c3' },
  ];

  ngOnInit() {
    this.setupForm();
  }

  protected get workRequestDetailsForm(): FormGroup<WorkshopDetailsForm> {
    return this.parentForm.get(this.formName) as FormGroup<WorkshopDetailsForm>;
  }

  private setupForm = (): void => {
    this.parentForm = this.parent.form;
    this.parentForm.setControl(this.formName, this.buildForm(this.workshop));
  };

  private buildForm = (workshop: Workshop): FormGroup<WorkshopDetailsForm> => {
    return new FormGroup<WorkshopDetailsForm>({
      id: new FormControl(workshop.id, Validators.required),
      instructorId: new FormControl(workshop.instructorId, Validators.required),
      title: new FormControl(workshop.title, Validators.required),
      description: new FormControl(workshop.description, Validators.required),
      linkedInUrl: new FormControl(workshop.linkedInUrl),
      gitHubUrl: new FormControl(workshop.gitHubUrl),
    });
  };
}

export interface WorkshopDetailsForm {
  id: FormControl<Guid | null>;
  instructorId: FormControl<Guid | null>;
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  linkedInUrl: FormControl<string | null>;
  gitHubUrl: FormControl<string | null>;
}

export interface Instructor {
  name: string;
  value: string;
}
