import { Component, OnInit , Input , OnChanges , ViewChild} from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { Observable } from 'rxjs/Observable';
import { DbserviceService} from '../dbservice.service';
import { } from '@types/googlemaps';
import * as moment from 'moment';
@Component({
  selector: 'app-mapscomponent',
  templateUrl: './mapscomponent.component.html',
  styleUrls: ['./mapscomponent.component.css']
})
export class MapscomponentComponent implements OnInit , OnChanges {
@Input() public locdata;
public keys = [];
public latlong = [];
public bmap = false;
public lastimage = './../../assets/locationlogo.png';
public locs = './../../assets/locs.png';
 mapStyle = [
  {
    elementType: 'geometry',
    stylers: [{color: '#eceff1'}]
  },
  {
    elementType: 'labels',
    stylers: [{visibility: 'off'}]
  },
  {
    featureType: 'administrative',
    elementType: 'labels',
    stylers: [{visibility: 'on'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#cfd8dc'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{visibility: 'off'}]
  },
  {
    featureType: 'road.local',
    stylers: [{visibility: 'off'}]
  },
  {
    featureType: 'water',
    stylers: [{color: '#b0bec5'}]
  }
];
@ViewChild('gmap') gmapElement: any;
map: google.maps.Map;

ngOnChanges(changes) {
  this.keys = [];
  this.latlong = [];
  this.bmap = false;
  this.trackpoints();
}

  constructor(private dbservice: DbserviceService) {
    }

  ngOnInit() {
    this.initMap();
    this.trackpoints();
  }
      initMap() {

        const myLatLng = {lat: -25.363, lng: 131.044};
        const mapProp = {
          center: myLatLng,
          zoom: 4,
          // styles : this.mapStyle
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement , mapProp );
      }
  trackpoints() {
    let count = 0;
    let image;
    this.bmap = true ;
     this.locdata.forEach(element => {
     this.keys.push((Object.keys(element)[0]));
     this.latlong.push(Object.values(element));
    });
    this.latlong.forEach((element) => {
        count++;
        if ( count === (this.latlong.length )) { image = this.lastimage;  } else { image = this.locs; }
      const myLatLng = {lat: element[0][0], lng: element[0][1] };
      const mapProp = {
        center: myLatLng,
        zoom: 15,
      //  styles : this.mapStyle
      };
      if ( count === 1) {
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      }
      const marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        icon : image ,
        title: moment.unix(Number(this.keys[(count - 1)])).format('h:mm:ss A')
      });
    }); }
  }


