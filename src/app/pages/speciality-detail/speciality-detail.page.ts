import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Observable } from 'rxjs';
import { SpecialityDetailModel,Operation,DoctorEntity } from 'src/app/intefaces/specialitymodel.model';
import {GlobalService} from '../../services/global.service'
@Component({
  selector: 'app-speciality-detail',
  templateUrl: './speciality-detail.page.html',
  styleUrls: ['./speciality-detail.page.scss'],
})
export class SpecialityDetailPage implements OnInit {
  SpecialityModel$: Observable<SpecialityDetailModel>;
  OperationList: Array<Operation>;
  DoctorList: Array<DoctorEntity>;
  constructor(private GlobalService:GlobalService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params:any) => {
      if (params) {
       console.log(params.specialityId);
       this.SpecialityModel$=this.GlobalService.GetSpecialityModelByID(params.specialityId);
       this.SpecialityModel$.toPromise().then(data=>{this.OperationList=data.OperationList;this.DoctorList=data.DoctorList;})
   
    

  }});

}
}
