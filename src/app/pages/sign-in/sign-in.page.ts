import { Component, OnInit } from '@angular/core';
import { MenuController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ForgetPasswordModalPage } from 'src/app/modals/forget-password-modal/forget-password-modal.page';
import { GlobalService } from 'src/app/services/global.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  validations_form: FormGroup;
  constructor(
    private menu: MenuController ,
    public modelCtrl:PopoverController ,
    private router: Router,
    public global:GlobalService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.menu.enable(false);

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
    });
    // End Form Validation

  }

  async ForgetPassWord(){
    const modal = await this.modelCtrl.create({
      component: ForgetPasswordModalPage,
      cssClass:'forgot_Password'
      
    });

    modal.onDidDismiss()
    .then((data) => {
      const flag = data['data'];  
      console.log(flag); 
      if(flag == true){  
        this.router.navigate(['/verification-code'])
      }
  });
    return await modal.present();
  }
  changeLanguage(){ 
    if(this.global.lang == 'en') this.global.change_lang('ar'); 
    else this.global.change_lang('en');  
    this.stop_menu();
  }
  stop_menu(){
    this.menu.enable(false, 'leftMenu');
    this.menu.enable(false, 'rightMenu');
  }
  onSubmit(ev){
    console.log(ev); 
    this.router.navigate(['/find-adoctor'])
  }
}
