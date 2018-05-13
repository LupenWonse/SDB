import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menuItem';
import { ImageLoaderService } from '../image-loader.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input() item: MenuItem;
    isCollapsed = false;

  constructor(private imageLoaderService : ImageLoaderService) { }

  ngOnInit() {
  }
  
  public onItemClick(){
    if (this.item.children.length > 0){
        this.isCollapsed = !this.isCollapsed;
    } else {
        console.log(this.item.charts);
        this.imageLoaderService.setImage(this.item.charts);
    }
    

  }

}
