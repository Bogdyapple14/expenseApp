import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ObjectsService } from 'src/app/shared/objects.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  type: string;
  expenses: number;
  @ViewChild('title') titleInputRef: ElementRef;
  @ViewChild('price') priceInputRef: ElementRef;
  @ViewChild('selectType') typeInputRef: ElementRef;

  ngOnInit(): void {
    // Initialize the values with the ones from the service
    this.type = this.ObjectsService.type;
    this.ObjectsService.retrieveFromLocalStorage();
    this.expenses = this.ObjectsService.expenses;
  }

  constructor(private ObjectsService: ObjectsService) {
    // Listen for changes in the service for 'type'
    this.ObjectsService.typeUpdated.subscribe((type: string) => {
      // recalculate expenses for the specific type and assign them to the expenses variable in this component
      this.expenses = this.ObjectsService.getExpenses(type);
      // Also, change the type in the component to the one from service
      this.type = type;
    });
  }

  // Add a new expense object with the values taken from the DOM
  // Price has type any cause the input returns a string and in the model it is declared as a number
  addExpense(title: string, price: any, type: string) {
    if (
      this.titleInputRef.nativeElement.value !== null &&
      this.priceInputRef.nativeElement.value !== null &&
      this.typeInputRef.nativeElement.value !== 'Select Expense Type'
    ) {
      // Transform the price from string to number
      price = parseFloat(price);
      // Emit the new object so that service knows that objects array changed ( event listened in the objects component )
      this.ObjectsService.addExpense.emit({ title, price, type });
      // Recalculate and assign the expenses with the new object added in the array
      this.expenses = this.ObjectsService.getExpenses(this.type);
      this.ObjectsService.setToLocalStorage();
      this.titleInputRef.nativeElement.value = null;
      this.priceInputRef.nativeElement.value = null;
      this.typeInputRef.nativeElement.value = 'Select Expense Type';
    } else alert('You Must Introduce All The Data');
  }

  // Clear all the expenses & the objects
  clearExpenses() {
    if (this.ObjectsService.objects.length) {
      // Emit an event so that srevice knows that objects array changed ( event listened in the objects component )
      this.ObjectsService.clearExpenses.emit();
      // Empty the expenses
      this.expenses = this.ObjectsService.expenses;
      this.ObjectsService.setToLocalStorage();
    }
  }
}
