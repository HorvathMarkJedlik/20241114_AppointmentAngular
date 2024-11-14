import { Person } from "./person.model";

export interface Service {
  id: number;
  name: string;
  description: string;
  availableTimes: string[];
  person: Person;
}


//  id: 1,
//       name: 'Masszázs',
//       description:
//         'Relaxáló masszázs, amely segít enyhíteni a stresszt és a fáradtságot.',
//       availableTimes: ['10:00', '11:30', '13:00', '14:30', '16:00'],
//       person: {
//         name: 'Kovács Anna',
//         photoUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
//       },
