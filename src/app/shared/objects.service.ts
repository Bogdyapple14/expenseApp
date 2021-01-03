import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ObjectsService {
  objects = [
    {
      title: 'Ice Skating',
      price: 10,
      type: 'Misc',
    },
    {
      title: 'Math Lessons',
      price: 5,
      type: 'Necesities',
    },
    {
      title: 'Hamburger',
      price: 6,
      type: 'Food',
    },
  ];
}
