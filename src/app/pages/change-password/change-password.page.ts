import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PasswordValidator } from '../../../app/password.validator';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  constructor(
    private toastController:ToastController,
    public navCtrl:NavController,
    private router: Router ,
    public global:GlobalService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    this.validations_form = this.formBuilder.group({
      matching_passwords: this.matching_passwords_group,
    });
    // End Form Validation
  }
  async confirm(){ 
    const toast = await this.toastController.create({ 
      message: 'Password Changed',
      position: 'bottom', 
      duration: 2000
    });
    toast.present();
    this.navCtrl.pop();
    this.router.navigate(['/sign-in']);
  } 
  onSubmit(ev){
    console.log(ev);
    this.router.navigate(['/sign-in'])
  }
}
