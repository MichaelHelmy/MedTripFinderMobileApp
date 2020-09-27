import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service'; 
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  validations_form: FormGroup;
  public countries=[
    {
      country_en:"Canada",
      country_ar:"كندا",
    },
    {
      country_en:"Australia",
      country_ar:"استرليا",
    },
    {
      country_en:"Cuba",
      country_ar:"كوبا",
    },
    {
      country_en:"Mexico",
      country_ar:"المكسيك",
    }
];
  constructor(
    private menu: MenuController ,
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
      // country: new FormControl('', Validators.required),
      fristName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
    // End Form Validation

  }
  onSubmit(ev){
    console.log(ev); 
    this.router.navigate(['/find-adoctor'])
  }
}
