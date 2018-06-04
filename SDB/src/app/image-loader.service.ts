import { Injectable } from '@angular/core';
import { Observable, of, Observer, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {
    private region = "REG";
    private imageSource = new BehaviorSubject<string[]>(['']);


  constructor() {
  }

    getImage(): Observable<string[]> {
        return this.imageSource.asObservable();
    }

    setImage(image: string[]): void {
        this.imageSource.next(image);
    }
    
    setRegion(region: string): void{
        this.region = region;
    }
}
