import { Injectable } from '@angular/core';
import { Workshop } from '../contracts/workshop';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockApiServiceService {
  constructor() {}
  workShopLoad(): Observable<Workshop> {
    const workshop: Workshop = {
      id: 'ab5477d1-3cc8-47f4-a303-bc249735c0e3',
      instructorId: '9e50e55f-37ec-4d2a-ba65-3746b63e79c3',
      title: 'Angular Forms',
      description: 'Learn how to build forms in Angular',
      linkedInUrl: 'https://www.linkedin.com/in/ryan-downey-1a2b3c4d/',
      gitHubUrl: '',
      attendees: [],
    };
    return of(workshop);
  }
}
