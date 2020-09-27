import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDoctorModalPage } from './rate-doctor-modal.page';

describe('RateDoctorModalPage', () => {
  let component: RateDoctorModalPage;
  let fixture: ComponentFixture<RateDoctorModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDoctorModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateDoctorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
