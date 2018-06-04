import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ImageLoaderService} from '../image-loader.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {

    @Input() images: string[];
    @Input() imageTitle: string;
    @Output() onClosed = new EventEmitter<boolean>();

  constructor(private imageLoaderService: ImageLoaderService ) { }

    close() {
        this.onClosed.emit();
    }

}
