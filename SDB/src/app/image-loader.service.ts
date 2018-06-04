import { Injectable } from '@angular/core';
import { Observable, of, Observer, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {
    private region = "REG";
    private imageSource = new Subject<string[]>();
    private imageTitle = new Subject<string>();

  constructor() {
  }

    getImage(): Observable<string[]> {
        return this.imageSource.asObservable();
    }
    
    getTitle(): Observable<string> {
        return this.imageTitle.asObservable();
    }

    setImage(image: string[]): void {
        this.imageSource.next(image);
    }
    
    setTitle(title: string): void{
        this.imageTitle.next(title);
    }
    
    setRegion(region: string): void{
        this.region = region;
    }
}
