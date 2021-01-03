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

  constructor(private ObjectService: ObjectsService) {
    // Subscribe to an event emitted from the service which returns the type everytime it is fired in a component
    // (menu.component in this case) and reasing the old (this.type) type, to the new (type) type
    this.ObjectService.typeUpdated.subscribe((type: string) => {
      this.type = type;
      // Also, refilter the objects array to display contain only the items with the specific type in order to display them
      // Answer to the problem that rendered every parent div with the *ngFor despite the condition
      this.objects = this.ObjectService.objects.filter(
        (object) => object.type === this.type
      );
      // Condition for the "All" Button
      if (this.type === 'All') this.objects = this.ObjectService.objects;
    });
  }

  ngOnInit() {
    this.type = this.ObjectService.type;
    this.objects = this.ObjectService.objects;
  }
}
