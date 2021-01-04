import { Component, OnInit } from '@angular/core';
import { ObjectsService } from 'src/app/shared/objects.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  constructor(private ObjectsService: ObjectsService) {}

  ngOnInit(): void {}

  addExpense(title: string, price: number, type: string) {
    this.ObjectsService.addExpense(title, price, type);
  }

  clearExpenses() {
    this.ObjectsService.clearExpenses.emit();
  }
}
