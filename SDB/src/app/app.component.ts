import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuItem';
import { MouseEvent } from '@agm/core';
import { ImageLoaderService } from './image-loader.service'

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}


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
    
 ngOnInit() {
      this.imageLoaderService.getImage().subscribe(next => this.displayedImage = next);
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
  
  markers: marker[] = [
	  {
		  lng: -80.9267,
		  lat: 35.0950,
		  label: 'Fort Mill',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]
    

menuItems: MenuItem[] = [
    {id: 1, level: 0, label : "Automotive", icon:"fa-car", link : "Hello", children: [
        {id: 2, icon: "fa-check-circle", level: 1, label : "Quality", link : "Hello", children: [
            {id: 2, icon: "",level: 2, label : "Customer Complaints", link : "https://images.pexels.com/photos/1050304/pexels-photo-1050304.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",children : []},
            {id: 2, icon: "",level: 2, label : "Scrap", link : "https://www.pexels.com/photo/macbook-pro-near-stethoscope-and-paper-clipboard-1050306/",children : []},
            {id: 2, icon: "",level: 2, label : "Waste", link : "https://www.pexels.com/photo/purple-red-and-white-eggs-1050307/",children : []},
            {id: 2, icon: "", level: 2, label : "Material Consumption Variance", link : "Hello!",children : []},
            {id: 2, icon: "",level: 2, label : "External Sorting Cost", link : "Hello!",children : []},
            {id: 2, icon: "",level: 2, label : "Supplier Complaints", link : "Hello!",children : []},
        ]},
        {id: 3, icon: "fa-money" ,level: 1, label : "Cost", link : "Hello",children:[
             {id: 4,icon: "", level: 2, label : "Cost KPI 1", link : "Hello!",children : []},
             {id: 4,icon: "", level: 2, label : "Cost KPI 2", link : "Hello!",children : []},
             {id: 4,icon: "", level: 2, label : "Cost KPI 3", link : "Hello!",children : []},
        ]},
        {id: 3, icon: "fa-truck" ,level: 1, label : "Cost", link : "Hello",children:[
             {id: 4,icon: "", level: 2, label : "Cost KPI 1", link : "Hello!",children : []},
             {id: 4,icon: "", level: 2, label : "Cost KPI 2", link : "Hello!",children : []},
             {id: 4,icon: "", level: 2, label : "Cost KPI 3", link : "Hello!",children : []},
        ]}
    ]},
    {id: 1, level: 0, label : "Industrial", icon:"fa-industry", link : "Hello", children: [
        {id: 2, icon: "fa-check-circle", level: 1, label : "Quality", link : "Hello", children: [
            {id: 2,icon: "", level: 2, label : "Customer Complaints", link : "https://www.pexels.com/photo/woman-holding-a-bitcoin-1037912/",children : []},
            {id: 2,icon: "", level: 2, label : "Scrap", link : "https://www.pexels.com/photo/macbook-pro-near-stethoscope-and-paper-clipboard-1050306/",children : []},
            {id: 2,icon: "", level: 2, label : "Waste", link : "https://www.pexels.com/photo/purple-red-and-white-eggs-1050307/",children : []},
            {id: 2,icon: "", level: 2, label : "Material Consumption Variance", link : "Hello!",children : []},
            {id: 2,icon: "", level: 2, label : "External Sorting Cost", link : "Hello!",children : []},
            {id: 2,icon: "", level: 2, label : "Supplier Complaints", link : "Hello!",children : []},
        ]},
        {id: 3, icon: "fa-money" ,level: 1, label : "Cost", link : "Hello",children:[
             {id: 4,icon: "", level: 2, label : "Cost KPI 1", link : "Hello!",children : []},
             {id: 4,icon: "", level: 2, label : "Cost KPI 2", link : "Hello!",children : []},
             {id: 4,icon: "", level: 2, label : "Cost KPI 3", link : "Hello!",children : []},
        ]},
        {id: 3, icon: "fa-truck" ,level: 1, label : "Cost", link : "Hello",children:[
             {id: 4,icon: "", level: 2, label : "Cost KPI 1", link : "Hello!",children : []},
             {id: 4,icon: "", level: 2, label : "Cost KPI 2", link : "Hello!",children : []},
             {id: 4,icon: "", level: 2, label : "Cost KPI 3", link : "Hello!",children : []},
        ]}
    ]}
];
    
    
}


