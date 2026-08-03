import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RppCashier } from './rpp-cashier';

describe('RppCashier', () => {
  let component: RppCashier;
  let fixture: ComponentFixture<RppCashier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RppCashier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RppCashier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
