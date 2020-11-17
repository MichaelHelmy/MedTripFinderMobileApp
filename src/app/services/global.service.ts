import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuController } from '@ionic/angular';
import {SpecialityModel} from '../intefaces/speciality.model';
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DoctorModel } from '../intefaces/doctor.model';
import { SpecialityDetailModel } from '../intefaces/specialitymodel.model';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  Dir='rtl';
  lang='ar';
  private htmlRoot = document.documentElement;
  constructor(public translate: TranslateService,public menu :MenuController,private http: HttpClient) { }


  // change Language
  change_lang(lang) {
    // console.log(this.currentLang);
    if (lang === 'en') {
      this.Dir = 'ltr';
      this.menu.enable(false, 'rightMenu');
      this.menu.enable(true, 'leftMenu'); 
      this.lang = 'en';
      console.log(lang);
      console.log(this.Dir);
    } else if (lang === 'ar') {
      this.Dir = 'rtl';
      console.log(lang);
      this.menu.enable(true, 'rightMenu');
      this.menu.enable(false, 'leftMenu'); 
      this.lang = 'ar';
      console.log(this.Dir);
    }
    this.htmlRoot.setAttribute('dir', this.Dir);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.htmlRoot.setAttribute('lang', lang);
    // localStorage.setItem('lang', lang);
    // localStorage.setItem('dir', this.Dir);
  }


    // validation messages
    validation_messages = {
      'username': [
        { type: 'required', message_en: 'Username is required.', message_ar: 'اسم المستخدم مطلوب.' },
    
        { type: 'minlength', message_en: 'Username must be at least 5 characters long.', message_ar: 'يجب أن يكون اسم المستخدم 5 أحرف على الأقل.' },
       
        { type: 'maxlength', message_en: 'Username cannot be more than 25 characters long.', message_ar: 'لا يمكن أن يكون اسم المستخدم أكثر من 25 حرفًا.' },
       
        { type: 'pattern', message_en: 'Your username must contain only numbers and letters.', message_ar: 'يجب أن يحتوي اسم المستخدم الخاص بك على أرقام وحروف فقط.' },
        { type: 'validUsername', message_en: 'Your username has already been taken.', message_ar: 'اسم المستخدم الخاص بك قد تم بالفعل.' }
      ],
      'fullName': [
        { type: 'required', message_en: 'Name is required.', message_ar: 'اسم مطلوب.' }
      ],
      'fristName': [
        { type: 'required', message_en: 'fristName is required.', message_ar: 'الاسم الاول مطلوب.' }
      ],
      'lastName': [
        { type: 'required', message_en: 'lastName is required.', message_ar: 'الاسم الاخير مطلوب.' }
      ],
      'email': [
        { type: 'required', message_en: 'Email is required.', message_ar: 'البريد الالكتروني مطلوب.' },
        { type: 'pattern', message_en: 'Please Enter a valid email.', message_ar: 'يرجى إدخال البريد الإلكتروني الصحيح.' }
      ],
      'message': [
        { type: 'required', message_en: 'message is required.', message_ar: 'الرساله مطلوب.' }
      ],
      'password': [
        { type: 'required', message_en: 'Password is required.', message_ar: 'كلمة المرور مطلوبة.' },
      
        { type: 'minlength', message_en: 'Password must be at least 5 characters long.', message_ar: 'يجب أن تتكون كلمة المرور من 5 أحرف على الأقل.' },
        
        { type: 'pattern', message_en: 'Your password must contain at least one uppercase, one lowercase, and one number.', message_ar: 'يجب أن تحتوي كلمة مرورك على حرف كبير واحد على الأقل وحرف صغير واحد ورقم واحد.' }
      ],
      'confirm_password': [
        { type: 'required', message_en: 'Confirm password is required.', message_ar: 'تأكيد كلمة المرور مطلوب.' }
      ],
      'matching_passwords': [
        { type: 'areEqual', message_en: 'Password mismatch.', message_ar: 'عدم تطابق كلمة المرور.' }
      ],
      'address': [
        { type: 'required', message_en: 'Address is required.', message_ar: 'العنوان مطلوب.' }
      ],
      'country': [
        { type: 'required', message_en: 'country is required.', message_ar: 'الدوله مطلوب .' }
      ],
      'city': [
        { type: 'required', message_en: 'city is required.', message_ar: 'المدينه المطلوب .' }
      ],
      'postalCode': [
        { type: 'required', message_en: 'postalCode is required.', message_ar: 'الرمز البريدى مطلوب .' }
      ],
      'phone': [
        { type: 'required', message_en: 'Phone is required.', message_ar: 'الهاتف مطلوب.' },
        { type: 'minlength', message_en: 'phone must be 10 numbers long.', message_ar: 'يجب أن يكون الهاتف 10 أرقام.' },
        { type: 'maxlength', message_en: 'phone must be 10 numbers long.', message_ar: 'يجب أن يكون الهاتف 10 أرقام.' },
        { type: 'pattern', message_en: 'Only Number', message_ar: 'أرقام فقط' }
      
      ],
      'cardNumber': [
        { type: 'required', message_en: 'cardNumber is required.', message_ar: 'رقم البطاقه مطلوب.' },
        { type: 'minlength', message_en: 'cardNumber must be 10 numbers long.', message_ar: 'يجب أن يكون رقم البطاقه 10 أرقام.' },
        { type: 'maxlength', message_en: 'cardNumber must be 10 numbers long.', message_ar: 'يجب أن يكون رقم البطاقه 10 أرقام.' },
        { type: 'pattern', message_en: 'Only Number', message_ar: 'أرقام فقط' }
      
      ]
    }

    select_styling(color,more) {
      //select arrow styling
     if(more == true){
      let select = document.querySelectorAll("ion-select");  
      for(let i=0;i<select.length;i++){
        var style = document.createElement('style');
        var style2=document.createElement('style');
        style.innerHTML = '.select-icon { width:22px!important }'; 
        style2.innerHTML = '.select-icon-inner { color:'+ color +'!important;opacity:1!important ;left:0px!important;right:0px!important;margin:-3px auto 0px!important;}'; 
        select[i].shadowRoot.appendChild(style); 
        select[i].shadowRoot.appendChild(style2);
      }
     }
     else{ 
     setTimeout(() => {
      let select = document.querySelector("ion-select");  
      var style = document.createElement('style');
      var style2=document.createElement('style');
      style.innerHTML = '.select-icon { width:22px!important }'; 
      style2.innerHTML = '.select-icon-inner { color:'+ color +'!important;opacity:1!important ;left:0px!important;right:0px!important;margin:-3px auto 0px!important;}'; 
      select.shadowRoot.appendChild(style); 
      select.shadowRoot.appendChild(style2);
     }, 100);
      
     } 
 
    }

    GetSpecialities():Observable<Array<SpecialityModel>>
    {
      return this.http.get<Array<SpecialityModel>>(
        "https://www.MedTripFinder.com/api/Form/GetSpecialties"
      );
    }
    
    GetDoctorsBySpeciality(speialityID:number):Observable<Array<DoctorModel>>
    {
      return this.http.get<Array<DoctorModel>>(
        `https://www.MedTripFinder.com/api/Form/GetDoctorsBySpecialities/${speialityID}`
      );
    }
     GetSpecialityModelByID(speialityID:number):Observable<SpecialityDetailModel>
    {
      return  this.http.get<SpecialityDetailModel>(
        `https://www.MedTripFinder.com/api/Form/GetSpecialityModelByID/${speialityID}`
      );
    }


}


