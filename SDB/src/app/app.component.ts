import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuItem';
import { MouseEvent } from '@agm/core';
import { ImageLoaderService } from './image-loader.service'
import { menuItems } from './menuItemsData'
import { locations } from './locationsData' 

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
    displayedImage : string ='';
    title = 'Schaeffler Digital Board';
    model = "Regional";
    zoom: number = 4;
  // initial center position for the map
  lng: number = -80.9267;
  lat: number = 35.0950;
    
    

    constructor(private imageLoaderService: ImageLoaderService ) { }
    
    private menuItems : MenuItem[];
    locations : marker[] ;
    
 ngOnInit() {
      this.imageLoaderService.getImage().subscribe(next => this.displayedImage = next[0]);
     this.menuItems = menuItems;
     this.markers = locations;
  }
    
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
      this.model = label;
  }
  
 // mapClicked($event: MouseEvent) {
//    this.markers.push({
  //    lat: $event.coords.lat,
    //  lng: $event.coords.lng,
//      draggable: true
//    });
//  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
    
    onImageClosed() {
        this.displayedImage = '';
    }
    
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]   
}


