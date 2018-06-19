import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menuItem';
import { ImageLoaderService } from '../image-loader.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input() items: MenuItem[];
    @Input() region: String;
    selectedItem: MenuItem;
    isCollapsed = false;

  constructor(private imageLoaderService: ImageLoaderService, private http: HttpClient) { }

  ngOnInit() {
  }

  public onItemClick(clickedItem: MenuItem) {
      if (clickedItem.level === 1) {
          if (clickedItem.id < 100) {
            for (const item of this.items) {
                item.hidden = false;
                if (item.id >= 100) {
                    item.hidden = true;
                }
            }
          } else if (clickedItem.id >= 100 && clickedItem.id < 200) {
              for (const item of this.items) {
                  item.hidden = false;
                  if (item.id < 100 || item.id >= 200) {
                      item.hidden = true;
                  }
              }
          } else if (clickedItem.id >= 200 && clickedItem.id < 300) {
              for (const item of this.items) {
                  item.hidden = false;
                  if (item.id < 200 || item.id >= 300) {
                      item.hidden = true;
                  }
              }
        }
      }

      if (clickedItem.level === 3) {
          this.selectedItem = clickedItem;
          this.imageLoaderService.setImage(clickedItem.charts);
          if (clickedItem.id < 100) {
            this.imageLoaderService.setTitle(clickedItem.label);
          } else if (clickedItem.id >= 100 && clickedItem.id < 200) {
            this.imageLoaderService.setTitle('Automotive - ' + clickedItem.label);
          } else if (clickedItem.id >= 200 && clickedItem.id < 300) {
            this.imageLoaderService.setTitle('Industrial - ' + clickedItem.label);
        }

      } if (clickedItem.level === 4) {
        this.http.get('./assets/charts/' + this.region + '/link.txt', {responseType: 'text'}).subscribe(data => {window.open(data);} );
      }
  }
}
