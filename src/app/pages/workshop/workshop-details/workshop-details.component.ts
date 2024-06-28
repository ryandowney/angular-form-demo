import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { WorkshopFormNames } from '../workshop-form-names';
import { Workshop } from 'src/app/contracts/workshop';

@Component({
  selector: 'app-workshop-details',
  templateUrl: './workshop-details.component.html',
  styleUrls: ['./workshop-details.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class WorkshopDetailsComponent implements OnInit {
  constructor(private parent: FormGroupDirective) {}
  @Input() workshop!: Workshop;
  private parentForm!: FormGroup;
  private formName = WorkshopFormNames.Details;
  instructors: Instructor[] = [
    { name: 'Ryan Downey', value: '9e50e55f-37ec-4d2a-ba65-3746b63e79c3' },
  ];

  ngOnInit() {
    this.parentForm = this.parent.form;
    this.parentForm.setControl(this.formName, this.buildForm(this.workshop));
  }

  protected get workRequestDetailsForm(): FormGroup<WorkshopDetailsForm> {
    return this.parentForm.get(this.formName) as FormGroup<WorkshopDetailsForm>;
  }

  private buildForm = (workshop: Workshop): FormGroup<WorkshopDetailsForm> => {
    return new FormGroup<WorkshopDetailsForm>({
      id: new FormControl(workshop.id),
      title: new FormControl(workshop.title),
      description: new FormControl(workshop.description),
      linkedInUrl: new FormControl(workshop.linkedInUrl),
      gitHubRepoUrl: new FormControl(workshop.gitHubRepoUrl),
    });
  };
}

export interface WorkshopDetailsForm {
  id: FormControl<string | null>;
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  linkedInUrl: FormControl<string | null>;
  gitHubRepoUrl: FormControl<string | null>;
}

export interface Instructor {
  name: string;
  value: string;
}
