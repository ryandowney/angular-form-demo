import { Injectable } from '@angular/core';
import { Workshop } from '../contracts/workshop';
import { Observable, of } from 'rxjs';
import { WorkshopAttendeeExperienceLevel } from '../contracts/enums/workshop-attendee-experience-level';

@Injectable({
  providedIn: 'root',
})
export class AccessorService {
  constructor() {}
  workShopLoad(): Observable<Workshop> {
    const workshop: Workshop = {
      id: 'ab5477d1-3cc8-47f4-a303-bc249735c0e3',
      instructorId: '9e50e55f-37ec-4d2a-ba65-3746b63e79c3',
      title: 'Angular Forms',
      description: 'Learn how to build forms in Angular',
      linkedInUrl: 'https://www.linkedin.com/in/ryan-downey-1a2b3c4d/',
      gitHubUrl: '',
      attendees: [
        {
          id: '1',
          name: 'Ryan Downey',
          experience: WorkshopAttendeeExperienceLevel.Beginner,
          dineIn: false,
          lunchChoice: null,
        },
      ],
    };
    return of(workshop);
  }

  workShopStore(workshop: Workshop): Observable<Workshop> {
    console.log(workshop);
    return of(workshop);
  }
}
