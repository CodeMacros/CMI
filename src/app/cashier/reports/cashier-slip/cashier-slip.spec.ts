import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierSlip } from './cashier-slip';

describe('CashierSlip', () => {
  let component: CashierSlip;
  let fixture: ComponentFixture<CashierSlip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashierSlip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashierSlip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
