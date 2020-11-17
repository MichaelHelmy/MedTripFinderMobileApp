import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecialityModel } from 'src/app/intefaces/speciality.model';
import {GlobalService} from '../../services/global.service'
@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.page.html',
  styleUrls: ['./specialities.page.scss'],
})
export class SpecialitiesPage implements OnInit {
  SpecialityList$: Observable<Array<SpecialityModel>>;
  constructor(public GlobalService:GlobalService) { }

  ngOnInit() {

    console.log("2222222");

    this.SpecialityList$ = this.GlobalService.GetSpecialities();
    const loaderSubscription = this.SpecialityList$.subscribe((items) => {
      if (items && items.length > 0) {
        
        if (loaderSubscription) {
          loaderSubscription.unsubscribe();
        }
      }
    });
    console.log(this.SpecialityList$);
  }

}
