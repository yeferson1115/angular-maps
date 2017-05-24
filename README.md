# map
* **[![Imgur](http://i.imgur.com/O2EOCxf.png)](https://rawgit.com/ng2-ui/map/master/app/index.html)**		


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


### List of available npm tasks

  * `npm run` : List all available tasks
  * `npm start`: Run `app` directory for development using `webpack-dev-server` with port 9001
  * `npm run clean`: Remove dist folder
  * `npm run clean:dist`: Clean up unnecessary dist folder within dist and app directory
  * `npm run lint`: Lint TypeScript code
  * `npm run build:ngc`: build ES module
  * `npm run build:umd`: Build UMD module `map.umd.js`
  * `npm run build:app`: Build `app/build/app.js` for runnable examples
  * `npm run build`: Build all(build:ngc, build:umc, build:app, and clean:dist)
