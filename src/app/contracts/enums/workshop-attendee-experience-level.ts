export enum WorkshopAttendeeExperienceLevel {
  Beginner = 1,
  Intermediate = 2,
  Advanced = 3,
}

export const WorkshopAttendeeExperienceLevelMapper: { [key: number]: string } =
  {
    [WorkshopAttendeeExperienceLevel.Beginner]: 'Beginner',
    [WorkshopAttendeeExperienceLevel.Intermediate]: 'Intermediate',
    [WorkshopAttendeeExperienceLevel.Advanced]: 'Advanced',
  };
