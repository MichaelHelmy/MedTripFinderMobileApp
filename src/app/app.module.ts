import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicRatingModule } from 'ionic4-rating';
import { Camera } from '@ionic-native/camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ForgetPasswordModalPageModule } from './modals/forget-password-modal/forget-password-modal.module';
import { RateDoctorModalPageModule } from './modals/rate-doctor-modal/rate-doctor-modal.module';
export function setTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      // mode:'ios',
      rippleEffect:false,
      backButtonText:'',
      scrollAssist:false,
      scrollPadding:false,
    }),
    HttpClientModule,
    AppRoutingModule,
    IonicRatingModule ,
    ForgetPasswordModalPageModule,
    RateDoctorModalPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (setTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient , Camera
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
