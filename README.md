
### Usage

1. Install node_module `@ngui/map` and typings

        $ npm install @ngui/map @types/googlemaps --save

2. _For SystemJs users only_, update `system.config.js` to recognize @ngui/map.

        map['@ngui/map'] = 'node_modules/@ngui/map/dist/map.umd.js';

3. import NguiMapeModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';

        import { AppComponent } from './app.component';
        import { NguiMapModule} from '@ngui/map';

        @NgModule({
          imports: [
            BrowserModule, 
            FormsModule, 
            NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=MY_GOOGLE_API_KEY'})
          ],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }
		
		
### Service Prismic.io
1. Create Repository of prismic.io
2. Create content
