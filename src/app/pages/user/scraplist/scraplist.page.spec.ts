import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScraplistPage } from './scraplist.page';

describe('ScraplistPage', () => {
  let component: ScraplistPage;
  let fixture: ComponentFixture<ScraplistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScraplistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScraplistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
