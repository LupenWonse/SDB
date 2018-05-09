import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menuItem';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input() item: MenuItem;
    isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
