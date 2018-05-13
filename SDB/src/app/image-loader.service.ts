import { Injectable } from '@angular/core';
import { Observable, of, Observer, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {
    private imageSource = new Subject<string[]>();


  constructor() {
  }

    getImage(): Observable<string[]> {
        return this.imageSource.asObservable();
    }

    setImage(image: string[]): void {
        this.imageSource.next(image);
    }
}
