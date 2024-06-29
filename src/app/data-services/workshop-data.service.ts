import { Injectable } from '@angular/core';
import { Workshop } from '../contracts/workshop';
import { emptyGuid } from '../const';
import { lastValueFrom, map } from 'rxjs';
import { AccessorService } from '../accessors/mock-api-service.service';

@Injectable({
  providedIn: 'root',
})
export class WorkshopDataService {
  constructor(private accessorService: AccessorService) {}

  async getWorkshop(id: Guid): Promise<Workshop> {
    if (id === emptyGuid) return <Workshop>this.blankWorkshop;

    return lastValueFrom(
      this.accessorService.workShopLoad().pipe(
        map((workshop) => {
          return workshop;
        })
      )
    );
  }

  async saveWorkshop(workshop: Workshop): Promise<Workshop> {
    return lastValueFrom(
      this.accessorService.worShopStore(workshop).pipe(
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
