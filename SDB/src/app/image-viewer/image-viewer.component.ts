import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ImageLoaderService} from '../image-loader.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

    public image: string;
    @Output() onClosed = new EventEmitter<boolean>();

  constructor(private imageLoaderService: ImageLoaderService ) { }

  ngOnInit() {
      this.imageLoaderService.getImage().subscribe(next => this.image = next);
  }

    close() {
        console.log("Emitting");
        this.onClosed.emit();
    }
    
    vote(agreed: boolean) {
        this.onVoted.emit(agreed);
    }
}
