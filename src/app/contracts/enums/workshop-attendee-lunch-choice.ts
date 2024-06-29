export enum WorkshopLunchChoice {
  Chicken = 1,
  Beef = 2,
  Fish = 3,
  Vegitarian = 4,
}

export const WorkshopLunchChoiceMapper: { [key: number]: string } = {
  [WorkshopLunchChoice.Chicken]: 'Chicken',
  [WorkshopLunchChoice.Beef]: 'Beef',
  [WorkshopLunchChoice.Fish]: 'Fish',
  [WorkshopLunchChoice.Vegitarian]: 'Vegitarian',
};
