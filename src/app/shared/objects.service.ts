import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ObjectsService {
  objects = [
    {
      title: 'Spartan Sandwich',
      price: 4,
      type: 'Food',
    },
    {
      title: 'Math Lessons',
      price: 10,
      type: 'Necesities',
    },
    {
      title: 'Ice Skating',
      price: 10,
      type: 'Misc',
    },
  ];
  type: string = '';

  typeUpdated = new EventEmitter<string>();
}
