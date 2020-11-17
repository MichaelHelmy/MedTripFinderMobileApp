import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorModel } from 'src/app/intefaces/doctor.model';
import {GlobalService} from "../../services/global.service"
@Component({
  selector: 'app-doctorsbyspeciality',
  templateUrl: './doctorsbyspeciality.page.html',
  styleUrls: ['./doctorsbyspeciality.page.scss'],
})
export class DoctorsbyspecialityPage implements OnInit {
  DoctorBySpecialityList$: Observable<Array<DoctorModel>>;
  constructor(private route: ActivatedRoute,private service:GlobalService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params:any) => {
      if (params) {
        console.log(params.specialityId);
        
       this.DoctorBySpecialityList$=this.service.GetDoctorsBySpeciality(params.specialityId);
      }
    });

}
}
