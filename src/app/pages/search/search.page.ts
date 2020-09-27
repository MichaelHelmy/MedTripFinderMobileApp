import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor(public global:GlobalService) { }

  ngOnInit() {
    this.global.select_styling('#000',true);
  }
departments=[
  {
    option_en:"IS",
    option_ar:"IS"
  },
  {
    option_en:"CS",
    option_ar:"CS"
  },
  {
    option_en:"All",
    option_ar:"الجميع",
  },
]
locations=[
    {
      option_en:"+0 km",
      option_ar:"+0 كم"

    },
    {
      option_en:"+0 mm",
      option_ar:"+0 مم"
    },
    {
      option_en:"+0 sm",
      option_ar:"+0 سم"
    },
]
sorts=[
  {
    option_en:"location",
    option_ar:"الموقع",
  },
  {
    option_en:"time",
    option_ar:"الوقت"
  },
]
}
