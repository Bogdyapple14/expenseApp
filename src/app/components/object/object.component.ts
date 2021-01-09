import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { expenseObject } from 'src/app/shared/expenseObject.model';
import { ObjectsService } from 'src/app/shared/objects.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
})
export class ObjectComponent implements OnInit {
  @Input() object: expenseObject;
  @Input() index: number;
  isDisplayEdit: boolean = false;

  constructor(private ObjectsService: ObjectsService) {}

  ngOnInit(): void {}

  displayEdit() {
    this.isDisplayEdit = !this.isDisplayEdit;
  }

  removeItem() {
    if (this.isDisplayEdit) {
      this.ObjectsService.objects.splice(this.index, 1);
      this.ObjectsService.getExpenses(this.ObjectsService.type);
      this.ObjectsService.typeUpdated.emit(this.ObjectsService.type);
      this.ObjectsService.setToLocalStorage();
    }
  }
}
