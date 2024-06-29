import { WorkshopLunchChoice } from './enums/workshop-attendee-lunch-choice';
import { WorkshopAttendeeExperienceLevel } from './enums/workshop-attendee-experience-level';

export interface WorkshopAttendee {
  id: Guid;
  name: string;
  experience: WorkshopAttendeeExperienceLevel;
  dineIn: boolean;
  lunchChoice: WorkshopLunchChoice | null;
}
