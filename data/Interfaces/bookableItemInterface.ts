// For generic Bookables
export interface Bookable {
  id: string;
  title: string;
  image: string;
  description?: string;
  price?: string;
  bookableType: BookableType;
}

export enum BookableType {
  Cottage = 'cottage',
  Boat = 'boat',
  //   Snowmobile = "snowmobile",
}
