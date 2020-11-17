import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitiesPage } from './specialities.page';

describe('SpecialitiesPage', () => {
  let component: SpecialitiesPage;
  let fixture: ComponentFixture<SpecialitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
