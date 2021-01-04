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
      title: 'Profi Shopping',
      price: 7,
      type: 'Food',
    },
    {
      title: 'Math Lessons',
      price: 10,
      type: 'Necesities',
    },
    {
      title: 'Taxes',
      price: 30,
      type: 'Necesities',
    },
    {
      title: 'Ice Skating',
      price: 10,
      type: 'Misc',
    },
    {
      title: 'League Skins',
      price: 500,
      type: 'Misc',
    },
  ];
  type: string = '';

  typeUpdated = new EventEmitter<string>();
  addExpense(title: string, price: number, type: string) {
    this.objects.push({ title, price, type });
  }
  clearExpenses = new EventEmitter();
}
