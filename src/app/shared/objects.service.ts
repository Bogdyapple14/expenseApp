import { Injectable, EventEmitter } from '@angular/core';
import { expenseObject } from './expenseObject.model';

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
  type: string = 'All';
  expenses: number = this.getExpenses(this.type);

  typeUpdated = new EventEmitter<string>();
  clearExpenses = new EventEmitter();
  addExpense = new EventEmitter<expenseObject>();

  getExpenses(type: string) {
    let sum: number = 0;
    this.objects.forEach((object) => {
      if (type === 'All') sum += object.price;
      else if (object.type === type) sum += object.price;
    });
    this.expenses = sum;
    return this.expenses;
  }
}
