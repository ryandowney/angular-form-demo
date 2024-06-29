import { Injectable } from '@angular/core';
import { Workshop } from '../contracts/workshop';
import { MockApiServiceService } from '../api-service/mock-api-service.service';
import { emptyGuid } from '../const';
import { lastValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkshopDataService {
  constructor(private apiService: MockApiServiceService) {}

  async getWorkshop(id: Guid): Promise<Workshop> {
    if (id === emptyGuid) return <Workshop>this.blankWorkshop;

    return lastValueFrom(
      this.apiService.workShopLoad().pipe(
        map((workshop) => {
          return workshop;
        })
      )
    );
  }

  async saveWorkshop(workshop: Workshop): Promise<Workshop> {
    return lastValueFrom(
      this.apiService.worShopStore(workshop).pipe(
        map((workshop) => {
          return workshop;
        })
      )
    );
  }

  private get blankWorkshop(): Nullable<Workshop> {
    return {
      id: emptyGuid,
      instructorId: null,
      title: null,
      description: null,
      linkedInUrl: null,
      gitHubUrl: null,
      attendees: [],
    };
  }
}
