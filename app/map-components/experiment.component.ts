import { Component, ChangeDetectorRef } from '@angular/core';
declare let google: any;

let templateStr = `
  <h3>Mapa de Calor</h3>
  <ngui-map zoom="12" center="51.523596340777075, 5.138463201866216">
    <heatmap-layer dissipating="true" radius="25" 
      (initialized$)="onHeatmapInitialized($event)"></heatmap-layer>
    <marker *ngFor="let pos of positions" [position]="pos" (click)="clicked($event)"></marker>
    <info-window id="iw">
      <div *ngIf="marker.display">
        lat: {{ marker.lat }}, lng: {{ marker.lng }}
      </div>      
    </info-window>
  </ngui-map>
`;
// ver 16.
@Component({
  template: templateStr,
})
export class ExperimentComponent {
  positions = [];
  heatmap: any;

  constructor(private cdr: ChangeDetectorRef) { }
    marker = {
    display: true,
    lat: null,
    lng: null,
  };

  clicked({target: marker}) {
    this.marker.lat = marker.getPosition().lat();
    this.marker.lng = marker.getPosition().lng();

    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }

  onHeatmapInitialized = (evt) => {
    this.heatmap = evt;

   

    let values = [];
    values.push(new google.maps.LatLng(51.5239935252832, 5.137663903579778));
    values.push(new google.maps.LatLng(51.523853342911906, 5.1377765563584035));
    values.push(new google.maps.LatLng(51.5237298485607, 5.137969675407476));
    values.push(new google.maps.LatLng(51.51109290500474, 5.117311477661133));
    values.push(new google.maps.LatLng(51.51087923308819, 5.118856430053711));
    values.push(new google.maps.LatLng(51.504148054725356, 5.156793594360352));
    values.push(new google.maps.LatLng(51.50468231156, 5.159883499145508));
    values.push(new google.maps.LatLng(51.52280529912936, 5.138543668136663));
    values.push(new google.maps.LatLng(51.523596340777075, 5.138463201866216));
    this.heatmap.setData(values);

    this.positions.push([51.5239935252832, 5.137663903579778]);
    this.positions.push([51.5238533429119065, 5.1377765563584035]);
    console.log(this.positions);
    this.cdr.detectChanges();
  }

}
