interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

export const locations : marker[] = [
      {
          label: 'Stratford AT',
          lat: 43.369671,
		  lng: -80.954288,
          draggable: false,
	  },
      {
          label: 'Stratford AS',
          lat: 43.356231,
		  lng: -81.008342,
          draggable: false,
	  },
      {
          label: 'Wooster',
          lat: 40.836994,
		  lng: -81.907797,
          draggable: false,
	  },
      {
          label: 'Joplin',
          lat: 37.046160,
		  lng: -94.468736,
          draggable: false,
	  },
      {
          label: 'Danbury',
          lat: 41.378997,
		  lng: -73.471377,
          draggable: false,
	  },
      {
          label: 'Fort Mill 1',
          lat: 35.091573,
		  lng: -80.927140,
          draggable: false,
	  },
      {
          label: 'Fort Mill 2',
          lat: 35.096878,
		  lng: -80.927884,
          draggable: false,
	  },
      {
          label: 'Cheraw 1 & 5',
          lat: 34.685248,
		  lng: -78.895565,
          draggable: false,
	  },
      {
          label: 'Cheraw 2',
          lat: 34.696710,
		  lng: -79.930007,
          draggable: false,
	  },
      {
          label: 'Spartanburg',
          lat: 34.981336,
		  lng: -81.995681,
          draggable: false,
	  },
      {
          label: 'Puebla 1',
          lat: 19.160926,
		  lng: -98.380319,
          draggable: false,
	  },
      {
          label: 'Puebla 2',
          lat: 19.161350,
		  lng: -98.379021,
          draggable: false,
	  },
      {
          label: 'Irapuato',
          lat: 20.787781,
		  lng: -101.337021,
          draggable: false,
	  },
      {
          label: 'Soracaba 1',
          lat: -23.438080,
		  lng: -47.414647,
          draggable: false,
	  },
      {
          label: 'Soracaba 2',
          lat: -23.438621,
		  lng: -47.416026,
          draggable: false,
	  }
  ]