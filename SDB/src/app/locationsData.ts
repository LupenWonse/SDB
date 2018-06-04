export interface marker {
	lat: number;
	lng: number;
	label: string;
    code: string;
	draggable?: boolean;
}

export const locations : marker[] = [
      {
         "label": "Stratford AT",
          "lat": 43.369671,
		  "lng": -80.954288,
          "code" : "SAT"
	  },
      {
         "label": "Stratford AS",
          "lat": 43.356231,
		  "lng": -81.008342,
          "code" : "SAS"
	  },
      {
         "label": "Wooster",
          "lat": 40.836994,
		  "lng": -81.907797,
          "code" : "REG"
	  },
      {
         "label": "Joplin",
          "lat": 37.046160,
		  "lng": -94.468736,
          "code" : "REG"
	  },
      {
         "label": "Danbury",
          "lat": 41.378997,
		  "lng": -73.471377,
          "code" : "REG"
	  },
      {
         "label": "Fort Mill 1",
          "lat": 35.091573,
		  "lng": -80.927140,
          "code" : "REG"
	  },
      {
         "label": "Fort Mill 2",
          "lat": 35.096878,
		  "lng": -80.927884,
          "code" : "REG"
	  },
      {
         "label": "Cheraw 1 & 5",
          "lat": 34.685242,
		  "lng": -79.895553,
          "code" : "REG"
	  },
      {
         "label": "Cheraw 2",
          "lat": 34.696710,
		  "lng": -79.930007,
          "code" : "REG"
	  },
      {
         "label": "Spartanburg",
          "lat": 34.981336,
		  "lng": -81.995681,
          "code" : "REG"
	  },
      {
         "label": "Puebla 1",
          "lat": 19.160926,
		  "lng": -98.380319,
          "code" : "REG"
	  },
      {
         "label": "Puebla 2",
          "lat": 19.161350,
		  "lng": -98.379021,
          "code" : "REG"
	  },
      {
         "label": "Irapuato",
          "lat": 20.787781,
		  "lng": -101.337021,
          "code" : "REG"
	  },
      {
         "label": "Soracaba 1",
          "lat": -23.438080,
		  "lng": -47.414647,
          "code" : "REG"
	  },
      {
         "label": "Soracaba 2",
          "lat": -23.438621,
		  "lng": -47.416026,
          "code" : "REG"
	  }
  ]