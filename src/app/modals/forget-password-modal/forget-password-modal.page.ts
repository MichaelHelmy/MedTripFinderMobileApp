import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-forget-password-modal',
  templateUrl: './forget-password-modal.page.html',
  styleUrls: ['./forget-password-modal.page.scss'],
})
export class ForgetPasswordModalPage implements OnInit {
  validations_form: FormGroup;
  constructor(
    public modelCtrl:PopoverController ,
    private router: Router,
    public global:GlobalService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    });
    // End Form Validation
  }
  close(flag){
    this.modelCtrl.dismiss(flag);
  }
  onSubmit(ev){
    console.log(ev); 
  }
}
