import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  okText;
  cancelText;
  html= document.documentElement;
  constructor(public global:GlobalService) { }

  ngOnInit() {
  }
 
  normal(){
    this.html.style.fontSize="65%";
  }
  larg(){
    this.html.style.fontSize="75%";
  }
}
