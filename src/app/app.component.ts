import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title_en: 'Home',
      title_ar:'الصفحه الرئيسيه',
      url: '/specialities',
      icon: 'home'
    },
    {
      title_en: 'Saved',
      title_ar:'تم الحفظ',
      url: '/saved',
      icon: 'heart'
    },
    {
      title_en: 'Account',
      title_ar: 'الحساب',
      url: '/account',
      icon: 'person'
    },
    {
      title_en: 'Notification',
      title_ar: 'الاشعارات',
      url: '/notification',
      icon: 'notifications'
    },
    {
      title_en: 'My Requests',
      title_ar: 'طلباتى',
      url: '/my-requests',
      icon: 'clipboard'
    },
    {
      title_en: 'Settings',
      title_ar: 'الاعدادات',
      url: '/settings',
      icon: 'Settings'
    }
  ];
  selected = 0;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl:NavController ,
    public global:GlobalService,
    public menu :MenuController
  ) {
    this.initializeApp();
    this.selected = 0;
  }

  initializeApp() {
    this.global.change_lang(this.global.lang);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  select(i) {
    this.selected = i;
    console.log(this.selected);
  }
  logOut(){
    this.selected = 0; 
    this.navCtrl.navigateRoot('sign-in');
    this.menu.enable(false, 'leftMenu');
    this.menu.enable(false, 'rightMenu');
  }
}
