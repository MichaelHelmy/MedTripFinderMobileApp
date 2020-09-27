import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {
  rate=3;
  constructor(public global:GlobalService) { }

  ngOnInit() {
  }
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

onModelChange(event){
  console.log(event);
}
like(item){
  
  if(item.like != true){
    item.like=true;
  }
  else{
    item.like=false;
  } 
}

remove(item){
  const index = this.saves.findIndex(obj => obj === item); 
  this.saves.splice(index, 1);
}
}
