import { FormControl } from '@angular/forms';

export interface WorkshopDetailsForm {
  id: FormControl<Guid | null>;
  instructorId: FormControl<Guid | null>;
  title: FormControl<string | null>;
  description: FormControl<string | null>;
  linkedInUrl: FormControl<string | null>;
  gitHubUrl: FormControl<string | null>;
}
