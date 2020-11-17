import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsbyspecialityPage } from './doctorsbyspeciality.page';

describe('DoctorsbyspecialityPage', () => {
  let component: DoctorsbyspecialityPage;
  let fixture: ComponentFixture<DoctorsbyspecialityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorsbyspecialityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsbyspecialityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
