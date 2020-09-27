import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.page.html',
  styleUrls: ['./my-requests.page.scss'],
})
export class MyRequestsPage implements OnInit {

  constructor(public global:GlobalService ) { }

  ngOnInit() {
  }
requests=[
  {
    name_en:"DR.john Smith",
    name_ar:"د.john Smith",
    title_en:"Certified Dermatologist",
    title_ar:"طبيب الجلدية المعتمد",
    address_en:"5 Avenue Anatole France, 75007 Paris, France",
    address_ar:"5 Avenue Anatole France, 75007 Paris, France",
    case:"wait",
    btn_en:"Wait Conirmation",
    btn_ar:"انتظر التأكيد"
  },
  {
    name_en:"DR.john Smith",
    name_ar:"د.john Smith",
    title_en:"Certified Dermatologist",
    title_ar:"طبيب الجلدية المعتمد",
    address_en:"5 Avenue Anatole France, 75007 Paris, France",
    address_ar:"5 Avenue Anatole France, 75007 Paris, France",
    case:"confirm",
    btn_en:"Confirmed",
    btn_ar:"تم التأكيد"
  },
  {
    name_en:"DR.john Smith",
    name_ar:"د.john Smith",
    title_en:"Certified Dermatologist",
    title_ar:"طبيب الجلدية المعتمد",
    address_en:"5 Avenue Anatole France, 75007 Paris, France",
    address_ar:"5 Avenue Anatole France, 75007 Paris, France",
    case:"done",
    btn_en:"Done",
    btn_ar:"فعله"
  },
]

remove(item){
  const index = this.requests.findIndex(obj => obj === item); 
  this.requests.splice(index, 1);
}

}
