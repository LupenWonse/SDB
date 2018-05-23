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
      this.imageLoaderService.getImage().subscribe(next => this.displayedImage = next[0]);
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
          label:'Fort Mill',
		  lng: -80.9267,
		  lat: 35.0950,
          draggable: false,
	  },
	  {
		  lat: 32.686114,
		  lng: -79.897184,
		  label: 'Cheraw',
          draggable: false,
	  },
	  {
		  lat: 20.787378,
		  lng: -101.337117,
		  label: 'Irapuato',
          draggable: false,
	  }
  ]
    
menuItems: MenuItem[] = [
    {id: 1, level: 0, label : "Automotive", icon:"fa-car", charts : [], children: [
        {id: 2, icon: "fa-check-circle", level: 1, label : "Quality", charts : [], children: [
            {id: 2, icon: "",level: 2, label : "Customer Complaints", charts : ['1_Chart1.jpg', '2_Chart 2.jpg'],children : []},
            {id: 2, icon: "",level: 2, label : "Scrap", charts : ['3_Chart 1.jpg', '4_Chart 3.jpg'], children : []},
            {id: 2, icon: "",level: 2, label : "Material Consumption Variance", charts : ['8_Chart 6.jpg','7_Chart 2.jpg'],children : []},
            {id: 2, icon: "",level: 2, label : "External Sorting Cost", charts : [],children : []},
            {id: 2, icon: "",level: 2, label : "Supplier Complaints", charts : [],children : []},
        ]},
        {id: 3, icon: "fa-money" ,level: 1, label : "Cost", charts : [],children:[
            {id: 2, icon: "",level: 2, label : "Inventory", charts : ['5_Chart 1.jpg','6_Chart 2.jpg'],children : []},
             {id: 4,icon: "", level: 2, label : "Direct Personnel Deviation", charts : ['9_Chart 1.jpg'],children : []},
             {id: 4,icon: "", level: 2, label : "Value Added", charts : ['12_Chart 3.jpg','13_Chart 4.jpg'],children : []},
        ]},
        {id: 3, icon: "fa-truck" ,level: 1, label : "Delivery", charts : [],children:[
             {id: 4,icon: "", level: 2, label : "Delivery", charts : ['10_Chart 4.jpg','11_Chart 5.jpg'],children : []},
        ]}
    ]},
    {id: 1, level: 0, label : "Industrial", icon:"fa-industry", charts : [], children: [
        {id: 2, icon: "fa-check-circle", level: 1, label : "Quality", charts : [], children: [
            {id: 2, icon: "",level: 2, label : "Customer Complaints", charts : ['1_Chart1.jpg', '2_Chart 2.jpg'],children : []},
            {id: 2, icon: "",level: 2, label : "Scrap", charts : ['3_Chart 1.jpg', '4_Chart 3.jpg'], children : []},
            {id: 2, icon: "",level: 2, label : "Material Consumption Variance", charts : ['8_Chart 6.jpg','7_Chart 2.jpg'],children : []},
            {id: 2, icon: "",level: 2, label : "External Sorting Cost", charts : [],children : []},
            {id: 2, icon: "",level: 2, label : "Supplier Complaints", charts : [],children : []},
        ]},
        {id: 3, icon: "fa-money" ,level: 1, label : "Cost", charts : [],children:[
            {id: 2, icon: "",level: 2, label : "Inventory", charts : ['5_Chart 1.jpg','6_Chart 2.jpg'],children : []},
             {id: 4,icon: "", level: 2, label : "Direct Personnel Deviation", charts : ['9_Chart 1.jpg'],children : []},
             {id: 4,icon: "", level: 2, label : "Value Added", charts : ['12_Chart 3.jpg','13_Chart 4.jpg'],children : []},
        ]},
        {id: 3, icon: "fa-truck" ,level: 1, label : "Delivery", charts : [],children:[
             {id: 4,icon: "", level: 2, label : "Delivery", charts : ['10_Chart 4.jpg','11_Chart 5.jpg'],children : []},
        ]}
    ]}
];
    
    
}


