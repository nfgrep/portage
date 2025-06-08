import { Bookable, BookableType } from './Interfaces/bookableItemInterface';

export interface Cottage extends Bookable {
  amenities?: string[];
  availability?: string;
}

export const cottagesData: Cottage[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Scary Cottage',
    image:
      'https://www.matthewslittleportagecamp.com/uploads/2/3/3/7/2337778/published/203-0145-2.jpg?1744545750',
    description:
      'A charming cottage with a mysterious atmosphere, perfect for those seeking adventure.',
    price: '$150/night',
    amenities: ['2 bedrooms', 'Kitchen', 'Fireplace', 'Lake view'],
    availability: 'Available now',
    bookableType: BookableType.Cottage,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Ice Cottage',
    image:
      'https://www.matthewslittleportagecamp.com/uploads/2/3/3/7/2337778/editor/7-outside-view.jpg?1665689086',
    description:
      'A cozy retreat with stunning winter views and modern amenities.',
    price: '$180/night',
    amenities: ['3 bedrooms', 'Full kitchen', 'Hot tub', 'Mountain view'],
    availability: 'Available now',
    bookableType: BookableType.Cottage,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sporty Cottage',
    image:
      'https://www.matthewslittleportagecamp.com/uploads/2/3/3/7/2337778/editor/6.jpg?1625247281',
    description:
      'Perfect for active guests with access to sports equipment and trails.',
    price: '$200/night',
    amenities: ['4 bedrooms', 'Game room', 'Kayak rental', 'Hiking trails'],
    availability: 'Available now',
    bookableType: BookableType.Cottage,
  },
];
