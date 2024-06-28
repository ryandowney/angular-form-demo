import { WorkshopAttendee } from './workshop-attendee';

export interface Workshop {
  id: string;
  instructorId: string;
  title: string;
  description: string;
  linkedInUrl: string;
  gitHubUrl: string;
  attendees: WorkshopAttendee[];
}
