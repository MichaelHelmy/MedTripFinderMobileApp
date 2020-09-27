import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindADoctorPage } from './find-adoctor.page';

describe('FindADoctorPage', () => {
  let component: FindADoctorPage;
  let fixture: ComponentFixture<FindADoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindADoctorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindADoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
