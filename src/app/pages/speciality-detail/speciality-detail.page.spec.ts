import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityDetailPage } from './speciality-detail.page';

describe('SpecialityDetailPage', () => {
  let component: SpecialityDetailPage;
  let fixture: ComponentFixture<SpecialityDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
