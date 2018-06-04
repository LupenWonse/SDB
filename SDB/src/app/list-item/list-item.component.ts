import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menuItem';
import { ImageLoaderService } from '../image-loader.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input() items: MenuItem[];
    isCollapsed = false;

  constructor(private imageLoaderService: ImageLoaderService) { }

  ngOnInit() {
  }

  public onItemClick(item: MenuItem) {
      if (item.level === 3) {
          console.log(item.charts);
          this.imageLoaderService.setImage(item.charts);
      }
  }
}
