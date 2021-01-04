import { Component, OnInit } from '@angular/core';
import { expenseObject } from 'src/app/shared/expenseObject.model';
import { ObjectsService } from 'src/app/shared/objects.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  type: string;
  expenses: number;

  ngOnInit(): void {
    this.type = this.ObjectsService.type;
    this.expenses = this.ObjectsService.expenses;
  }

  constructor(private ObjectsService: ObjectsService) {
    this.ObjectsService.typeUpdated.subscribe((type: string) => {
      this.ObjectsService.getExpenses(type);
      this.expenses = this.ObjectsService.expenses;
    });
  }

  addExpense(title: string, price: string, type: string) {
    this.ObjectsService.addExpense(title, parseFloat(price), type);
    this.ObjectsService.getExpenses(this.type);
    this.expenses = this.ObjectsService.expenses;
    console.log(this.ObjectsService.objects);
  }

  clearExpenses() {
    this.ObjectsService.clearExpenses.emit();
    this.expenses = 0;
  }
}
