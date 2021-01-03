import { Component, Input, OnInit } from '@angular/core';
import { expenseObject } from 'src/app/shared/expenseObject.model';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss'],
})
export class ObjectComponent implements OnInit {
  @Input() object: expenseObject;
  ngOnInit(): void {}
}
