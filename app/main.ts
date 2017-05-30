// polyfills, comment the following out for debugging purpose
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {NguiUtilsModule} from '@ngui/utils';
//noinspection TypeScriptCheckImport
import { NguiMapModule } from '@ngui/map';

//Componentes
import { AppComponent } from './app.component';
import { ExperimentComponent } from './Components/experiment.component';
//Config
import { APP_ROUTER_PROVIDERS, APP_ROUTER_COMPONENTS } from './Config/app.route';
//Servicios
import {PrismicService} from './Service/Prismic.Service';
import {ILocationsService,LocationsService} from './Service/Locations.Service';

//Respositorios
import {ILocationsRepository,LocationsRepository} from './Repositories/Locations.Repository';
// Use the endpoint of your repository
const ENDPOINT = 'https://location.cdn.prismic.io/api';
// Specify an access token if your API is set to private
const ACCESS_TOKEN = null;
// Customize this to match your routing pattern

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_PROVIDERS,
    // NguiMapModule,
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
      '&libraries=visualization,places,drawing',
    }),
    NguiUtilsModule ],
  declarations: [AppComponent,ExperimentComponent, APP_ROUTER_COMPONENTS],
  providers: [
    PrismicService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'PrismicEndpoint', useValue: ENDPOINT },
    { provide: 'PrismicAccessToken', useValue: ACCESS_TOKEN }
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
