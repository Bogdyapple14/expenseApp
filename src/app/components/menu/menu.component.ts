import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { ObjectsService } from 'src/app/shared/objects.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isSelected: boolean;
  type: string;
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

  constructor(private objectService: ObjectsService) {
    this.objectService.typeUpdated.subscribe((type: string) => {
      this.type = type;
    });
  }

  ngOnInit(): void {
    this.type = this.objectService.type;
  }

  changeType(type: string) {
    // Emit an event that changes the type variable in service ( this event is listened in the objects component )
    this.objectService.typeUpdated.emit(type);
  }
}
