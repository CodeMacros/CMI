import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPiwc } from './view-piwc';

describe('ViewPiwc', () => {
  let component: ViewPiwc;
  let fixture: ComponentFixture<ViewPiwc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPiwc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPiwc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
