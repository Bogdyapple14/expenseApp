import { Component, OnInit } from '@angular/core';
import { expenseObject } from 'src/app/shared/expenseObject.model';
import { ObjectsService } from 'src/app/shared/objects.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss'],
  providers: [ObjectsService],
})
export class ObjectsComponent implements OnInit {
  objects: expenseObject[];

  constructor(private ObjectService: ObjectsService) {}

  ngOnInit() {
    this.objects = this.ObjectService.objects;
  }
}
