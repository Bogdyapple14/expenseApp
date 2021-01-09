import { Injectable, EventEmitter } from '@angular/core';
import { expenseObject } from './expenseObject.model';

@Injectable({
  providedIn: 'root',
})
export class ObjectsService {
  objects = [];
  // Initialize the type with 'All' to show all objects
  type: string = 'All';
  expenses: number = this.getExpenses(this.type);

  typeUpdated = new EventEmitter<string>();
  clearExpenses = new EventEmitter<void>();
  addExpense = new EventEmitter<expenseObject>();
  deleteExpense = new EventEmitter<number>();

  getExpenses(type: string) {
    let sum: number = 0;
    // Iterate through every object in the array and add their prices based on the condition
    this.objects.forEach((object) => {
      if (type === 'All') sum += object.price;
      // If there is a type selected other than all, search through every item and add only those with the specific requested type
      else if (object.type === type) sum += object.price;
    });
    this.expenses = sum;
    return this.expenses;
  }

  setToLocalStorage() {
    localStorage.setItem('expense', JSON.stringify(this.objects));
    localStorage.setItem('totalCost', JSON.stringify(this.expenses));
  }

  retrieveFromLocalStorage() {
    if (localStorage.getItem('expense') === null) {
      this.objects = [];
      this.expenses = 0;
    } else this.objects = JSON.parse(localStorage.getItem('expense'));
    if (localStorage.getItem('totalCost') === null) {
      this.expenses = 0;
    } else this.expenses = JSON.parse(localStorage.getItem('totalCost'));
  }
}
