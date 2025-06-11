import { Bookable, BookableType } from './Interfaces/bookableItemInterface';

export interface Boat extends Bookable {
  amenities?: string[];
  availability?: string;
  model: string;
  licensePlate: string;
}

export const boatsData: Boat[] = [
  {
    id: 'dd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sunset Cruiser',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description:
      'A comfortable pontoon boat perfect for relaxing cruises and family outings.',
    price: '$120/day',
    amenities: ['Bimini top', 'Bluetooth speakers', 'Cooler', 'Seating for 8'],
    availability: 'Available now',
    model: 'Bennington 22 SLX',
    licensePlate: 'ON-1234567',
    bookableType: BookableType.Boat,
  },
  {
    id: 'eac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fishing Pro',
    image:
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    description:
      'Fully equipped fishing boat for serious anglers and weekend warriors.',
    price: '$150/day',
    amenities: ['Fish finder', 'Livewell', 'Rod holders', 'Trolling motor'],
    availability: 'Available now',
    model: 'Lund 1875 Pro-V',
    licensePlate: 'ON-7654321',
    bookableType: BookableType.Boat,
  },
  {
    id: 'f8694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Speedster',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
    description:
      'High-performance speedboat for thrill seekers and water sports.',
    price: '$200/day',
    amenities: [
      'Wakeboard tower',
      'V8 engine',
      'Seating for 6',
      'Swim platform',
    ],
    availability: 'Available now',
    model: 'Yamaha AR210',
    licensePlate: 'ON-2468135',
    bookableType: BookableType.Boat,
  },
];
