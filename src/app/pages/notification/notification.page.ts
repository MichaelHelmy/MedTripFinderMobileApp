import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(public global:GlobalService) { }
notifications=[
  {
    name_en:"DR.john Smith",
    name_ar:"د.john Smith",
    title_en:"Certified Dermatologist",
    title_ar:"طبيب الجلدية المعتمد",
    paragraph_en:"Lorem Ipsum is simply dummy text of the printing and typesetting",
    paragraph_ar:"هذا رائع جدا"
  },
  {
    name_en:"DR.john Smith",
    name_ar:"د.john Smith",
    title_en:"Certified Dermatologist",
    title_ar:"طبيب الجلدية المعتمد",
    paragraph_en:"Lorem Ipsum is simply dummy text of the printing and typesetting",
    paragraph_ar:"هذا رائع جدا"
  },
  {
    name_en:"DR.john Smith",
    name_ar:"د.john Smith",
    title_en:"Certified Dermatologist",
    title_ar:"طبيب الجلدية المعتمد",
    paragraph_en:"Lorem Ipsum is simply dummy text of the printing and typesetting",
    paragraph_ar:"هذا رائع جدا"
  },
]
  ngOnInit() {
  }

}
