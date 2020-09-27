import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-rate-doctor-modal',
  templateUrl: './rate-doctor-modal.page.html',
  styleUrls: ['./rate-doctor-modal.page.scss'],
})
export class RateDoctorModalPage implements OnInit {
rate = 3;
  constructor(public modelCtrl:PopoverController , public global:GlobalService) { }

  ngOnInit() {
  }
  onRateChange(event){
    console.log(event);
  }  
  close(){
    this.modelCtrl.dismiss();
  }
}
