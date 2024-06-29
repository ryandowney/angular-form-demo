import { FormControl } from '@angular/forms';
import { WorkshopAttendeeExperienceLevel } from 'src/app/contracts/enums/workshop-attendee-experience-level';
import { WorkshopLunchChoice } from 'src/app/contracts/enums/workshop-attendee-lunch-choice';

export interface WorkshopAttendeeForm {
  id: FormControl<Guid | null>;
  name: FormControl<string | null>;
  experience: FormControl<WorkshopAttendeeExperienceLevel | null>;
  dineIn: FormControl<boolean | null>;
  lunchChoice: FormControl<WorkshopLunchChoice | null>;
}
