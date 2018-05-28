import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageAppear } from 'ng-image-appear';

import { AgmCoreModule} from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    ListItemComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
      AgmCoreModule.forRoot(),
      AgmJsMarkerClustererModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
