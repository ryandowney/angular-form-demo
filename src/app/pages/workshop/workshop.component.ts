import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { emptyGuid } from 'src/app/const';
import { Workshop } from 'src/app/contracts/workshop';
import { WorkshopDataService } from 'src/app/data-services/workshop-data.service';
import { WorkshopFormNames } from './forms/workshop-form-names';

@UntilDestroy()
@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss'],
})
export class WorkshopComponent implements OnInit {
  constructor(
    private workshopDateService: WorkshopDataService,
    private activatedRoute: ActivatedRoute
  ) {}
  protected showForm = false;
  protected hasChanges = false;
  protected formValid = false;
  protected workshopForm!: FormGroup<any>;
  protected workshop!: Workshop;

  ngOnInit() {
    this.workshopForm = new FormGroup<any>({});
    this.subscribeToActivatedRoute();
    this.monitorForm();
  }

  protected logForm() {
    console.log(this.workshopForm);
  }
  protected async saveChanges() {
    this.showForm = false;

    const {
      [WorkshopFormNames.Details]: detailsForm,
      [WorkshopFormNames.Attendees]: attendeesFormArray,
    } = this.workshopForm.getRawValue();

    const workShop: Workshop = {
      ...detailsForm,
      attendees: attendeesFormArray,
    };

    this.workshop = await this.workshopDateService.saveWorkshop(workShop);

    this.showForm = true;
  }

  private monitorForm = (): void => {
    this.workshopForm.statusChanges
      .pipe(untilDestroyed(this))
      .subscribe((status) => {
        if (status === 'INVALID') this.formValid = false;
        else this.formValid = true;
      });
  };

  private subscribeToActivatedRoute = (): void => {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe(async (param: Params) => {
        const workshopId = param['id'];
        if (workshopId === undefined) await this.loadWorkshop(emptyGuid);
        else await this.loadWorkshop(workshopId);
      });
  };

  private async loadWorkshop(workshopId: Guid) {
    this.workshop = await this.workshopDateService.getWorkshop(workshopId);
    this.showForm = true;
  }
}
