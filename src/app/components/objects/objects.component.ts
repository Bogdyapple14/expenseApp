import { Component, OnInit } from '@angular/core';
import { expenseObject } from 'src/app/shared/expenseObject.model';
import { ObjectsService } from 'src/app/shared/objects.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss'],
})
export class ObjectsComponent implements OnInit {
  objects: expenseObject[];
  type: string;

  ngOnInit() {
    // Assign the type from the service and apply filters if existing
    this.type = this.ObjectService.type;
    this.ObjectService.retrieveFromLocalStorage();
    this.filterObjects();
  }

  constructor(private ObjectService: ObjectsService) {
    // Subscribe to an event emitted from the service which returns the type everytime it is fired in a component
    // ( menu.component in this case ) and reassing the old (this.type) type, to the new (type) type
    this.ObjectService.typeUpdated.subscribe((type: string) => {
      this.type = type;
      // Refilter the objects array with the new type in order to display them
      this.filterObjects();
    });

    // Subscribe to clearExpenses so that whenever the event is emitted it triggers
    this.ObjectService.clearExpenses.subscribe(() => {
      // Clear the objects in the component and in the service
      this.objects = this.ObjectService.objects = [];
      // Also clear the expenses in the service
      this.ObjectService.expenses = 0;
      this.setToLocalStorage();
    });

    // Subscribe to addExpense so that whenever the event is emitted it triggers
    this.ObjectService.addExpense.subscribe((dataObject: any) => {
      // Push a new object with the arguments emitted from input component (dataObject)
      this.ObjectService.objects.push(dataObject);
      // Filter the objects after adding the new one
      this.filterObjects();
      this.setToLocalStorage();
    });
  }

  setToLocalStorage() {
    this.ObjectService.setToLocalStorage();
  }

  getFromStorage() {
    this.ObjectService.retrieveFromLocalStorage();
  }

  filterObjects() {
    // If the type is all, remove any filters from the objects
    if (this.type === 'All') this.objects = this.ObjectService.objects;
    // Else, filter them based on the actual type
    else
      this.objects = this.ObjectService.objects.filter(
        (object) => object.type === this.type
      );
  }
}
