import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SimpleMarkerComponent } from '../Components/simple-marker.component';

import { ExperimentComponent } from '../Components/experiment.component';

export const routes: Routes = [
  
  { path: 'simple-marker', component: SimpleMarkerComponent },
  { path: 'experiment', component: ExperimentComponent },
  { path: '',  redirectTo: '/simple-marker', pathMatch: 'full' },
];

export const APP_ROUTER_PROVIDERS: ModuleWithProviders = RouterModule.forRoot(routes);
export const APP_ROUTER_COMPONENTS = [
  SimpleMarkerComponent,
  ExperimentComponent
];

