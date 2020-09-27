import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { PopoverController } from '@ionic/angular';
import { RateDoctorModalPage } from 'src/app/modals/rate-doctor-modal/rate-doctor-modal.page';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  rate=3;
  Days = [
    {
      day_en: "Sunday",
      day_ar: "الاحد"
    },
    {
      day_en: "Monday",
      day_ar: "الاثنين"
    },
    {
      day_en: "Tuesday",
      day_ar: "الثلاثاء"
    },
    {
      day_en: "Wednesday",
      day_ar: "الاربعاء"
    },
    {
      day_en: "Thursday",
      day_ar: "الخميس"
    },
    {
      day_en: "Friday",
      day_ar: "الجمعه"
    },
  ]
  Details = [
    {
      name_en: "DR.john Smith",
      name_ar: "د.john Smith",
      title_en: "Certified Dermatologist",
      title_ar: "طبيب الجلدية المعتمد",
      paragraph_en: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      paragraph_ar: "إنها حقيقة ثابتة منذ فترة طويلة وهي أن القارئ سيصرف انتباهه عن المحتوى المقروء للصفحة عند النظر في تصميمها. الهدف من استخدام Lorem Ipsum هو أنه يحتوي على توزيع طبيعي أكثر أو أقل من الحروف ، بدلاً من استخدام  هنا ، والمحتوى هنا ، مما يجعلها تبدو وكأنها اللغة الإنجليزية قابلة للقراءة"
    }
  ]

  Ratting = [
    {
      ImgUrl: "./assets/img/person-details.png",
      name: "WendyVerdades",
      time_en: "3 days ago",
      time_ar: "منذ 3 أيام",
      paragraph_en: "Explains conditions & treatments",
      paragraph_ar: "يشرح الظروف والعلاجات."
    },
    {
      ImgUrl: "./assets/img/person-details.png",
      name: "WendyVerdades",
      time_en: "3 days ago",
      time_ar: "منذ 3 أيام",
      paragraph_en: "Explains conditions & treatments",
      paragraph_ar: "يشرح الظروف والعلاجات."
    },
  ]
  constructor(public global:GlobalService , public modelCtrl:PopoverController ,) { }

  ngOnInit() {
    this.global.select_styling('#fff',false); 
    console.log('jjjjjjjjj')
  }
  async rateDoctor(){
    const modal = await this.modelCtrl.create({
      component: RateDoctorModalPage,
      cssClass:'Rate_Modal'
    });  
    return await modal.present();
  }
  
  onRateChange(event){
    console.log(event);
  }
}
