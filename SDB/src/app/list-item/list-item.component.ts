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

  public onItemClick(item: MenuItem) {
      if (item.level === 3) {
          this.selectedItem = item;
          this.imageLoaderService.setImage(item.charts);
          if (item.id < 100){
            this.imageLoaderService.setTitle(item.label);
          } else if (item.id >= 100 && item.id < 200) {
            this.imageLoaderService.setTitle('Automotive - ' + item.label);
          } else if (item.id >= 200 && item.id < 300) {
            this.imageLoaderService.setTitle('Industrial - ' + item.label);
        }
          
      } if (item.level === 4){
        this.http.get('./assets/charts/' + this.region + '/link.txt', {responseType: 'text'}).subscribe(data => {window.open(data);} );
      }
  }
}
