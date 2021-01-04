import { Component, OnInit } from '@angular/core';
import { ObjectsService } from 'src/app/shared/objects.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  buttons = [
    {
      content: 'Food',
    },
    {
      content: 'Necesities',
    },
    {
      content: 'Misc',
    },
    {
      content: 'All',
    },
  ];

  constructor(private objectService: ObjectsService) {}

  ngOnInit(): void {}

  changeType(type: string) {
    // Emit an event that changes the type variable in service ( this event is listened in the objects component )
    this.objectService.typeUpdated.emit(type);
  }
}
