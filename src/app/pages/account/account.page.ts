import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  img="./assets/img/Account.png"
  validations_form: FormGroup;
  form_disabled=true;
  person_info={
    phone:"1118764090",
    password:"123Aa",
    address:"Paradeplein, 2018 Antwerp, Belgium"
  }
  constructor(
    private router: Router,
    public global:GlobalService,
    public formBuilder: FormBuilder,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      
      phone: new FormControl('', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.required, 
        Validators.pattern('[0-9]*')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      address: new FormControl('', Validators.required),
    });
    // End Form Validation
  }
  update(){
    this.form_disabled = false;
   }
   onSubmit(ev){
     console.log(ev); 
     this.form_disabled = true;
   }
   async  selectImage() {
    if (this.global.lang === 'en') {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Modify your Picture',
        buttons: [
          {
            text: 'Gallery',
            handler: () => { this.get_camera('Gallery'); }
          }, {
            text: 'Camera',
            handler: () => { this.get_camera('Camera'); }
          }, {
            text: 'Cancel',
            role: 'cancel',
            handler: () => { }
          }
        ],
        cssClass: 'camera_sheet'
      });
      actionSheet.present();
    }
    if (this.global.lang === 'ar') {
      // tslint:disable-next-line:prefer-const
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'تعديل صورة الحساب',
        buttons: [
          {
            text: 'معرض الصور',
            handler: () => { this.get_camera('Gallery'); }
          }, {
            text: 'الكاميرا',
            handler: () => { this.get_camera('Camera'); }
          }, {
            text: 'الغاء',
            role: 'cancel',
            handler: () => { }
          }
        ],
        cssClass: 'camera_sheet'
      }
      );
      await actionSheet.present();
    }
  }
  get_camera(source) {
    const options: CameraOptions = {
      quality: 100, destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG, mediaType: this.camera.MediaType.PICTURE
      , allowEdit: true, targetWidth: 512, targetHeight: 512, correctOrientation: true
    };
    if (source === 'Gallery') {
      options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    } else {
      options.sourceType = this.camera.PictureSourceType.CAMERA;
    }

    this.camera.getPicture(options).then((imageData) => {
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => { });

  }
}
