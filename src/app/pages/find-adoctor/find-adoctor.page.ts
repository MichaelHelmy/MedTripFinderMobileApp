import { Component, OnInit , ElementRef ,ViewChild} from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { MenuController } from '@ionic/angular';
declare var google;
@Component({
  selector: 'app-find-adoctor',
  templateUrl: './find-adoctor.page.html',
  styleUrls: ['./find-adoctor.page.scss'],
})
export class FindADoctorPage implements OnInit {
  show = true;
  @ViewChild('map',  {static: false}) mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  toggle_var=false;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  constructor(public global:GlobalService , private menu: MenuController) { 
    if(global.lang==='en'){
      this.menu.enable(false, 'rightMenu');
      this.menu.enable(true, 'leftMenu');
    }
    else if(global.lang==='ar'){
      this.menu.enable(true, 'rightMenu');
      this.menu.enable(false, 'leftMenu');
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.initMap();
    }, 1000);
    // this.menu.enable(true);
  }
  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: { lat: 41.85, lng: -87.65 },
      styles:
        [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.business",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]
      
    });
    this.directionsDisplay.setMap(this.map);
  }

  Doctors=[
    {
      imgUrl:"./assets/img/doctor1.png",
      name_en:"DR.john Smith",
      name_ar:"د.john Smith",
      title_en:"Certified Dermatologist",
      title_ar:"طبيب الجلدية المعتمد",
      address_en:"5 Avenue Anatole France, 75007 Paris, France",
      address_ar:"5 Avenue Anatole France, 75007 Paris, France",
    },
    {
      imgUrl:"./assets/img/doctor2.png",
      name_en:"DR.john Smith",
      name_ar:"د.john Smith",
      title_en:"Certified Dermatologist",
      title_ar:"طبيب الجلدية المعتمد",
      address_en:"5 Avenue Anatole France, 75007 Paris, France",
      address_ar:"5 Avenue Anatole France, 75007 Paris, France",
    },
    {
      imgUrl:"./assets/img/doctor1.png",
      name_en:"DR.john Smith",
      name_ar:"د.john Smith",
      title_en:"Certified Dermatologist",
      title_ar:"طبيب الجلدية المعتمد",
      address_en:"5 Avenue Anatole France, 75007 Paris, France",
      address_ar:"5 Avenue Anatole France, 75007 Paris, France"
    },
    {
      imgUrl:"./assets/img/doctor2.png",
      name_en:"DR.john Smith",
      name_ar:"د.john Smith",
      title_en:"Certified Dermatologist",
      title_ar:"طبيب الجلدية المعتمد",
      address_en:"5 Avenue Anatole France, 75007 Paris, France",
      address_ar:"5 Avenue Anatole France, 75007 Paris, France"
    }
  ]
  saves=[
    {
      imgUrl:"./assets/img/doctor1.png",
      name_en:"DR.john Smith",
      name_ar:"د.john Smith",
      title_en:"Certified Dermatologist",
      title_ar:"طبيب الجلدية المعتمد",
      address_en:"5 Avenue Anatole France, 75007 Paris, France",
      address_ar:"5 Avenue Anatole France, 75007 Paris, France"
    },
    {
      imgUrl:"./assets/img/doctor1.png",
      name_en:"DR.john Smith",
      name_ar:"د.john Smith",
      title_en:"Certified Dermatologist",
      title_ar:"طبيب الجلدية المعتمد",
      address_en:"5 Avenue Anatole France, 75007 Paris, France",
      address_ar:"5 Avenue Anatole France, 75007 Paris, France"
    },
    {
      imgUrl:"./assets/img/doctor1.png",
      name_en:"DR.john Smith",
      name_ar:"د.john Smith",
      title_en:"Certified Dermatologist",
      title_ar:"طبيب الجلدية المعتمد",
      address_en:"5 Avenue Anatole France, 75007 Paris, France",
      address_ar:"5 Avenue Anatole France, 75007 Paris, France"
    },
  ]
  stop_prop(){
    event.preventDefault();
    event.stopPropagation();
  }
  like(item){
  
    if(item.like != true){
      item.like=true;
    }
    else{
      item.like=false;
    }
this.stop_prop();  
  }

  show_save(item){
    this.stop_prop();  
    if(item.show != false){
      item.show = false;
    }
    else{
      item.show= true;
    }
  }
  onRateChange(event){
    console.log(event);
  }
 
}
