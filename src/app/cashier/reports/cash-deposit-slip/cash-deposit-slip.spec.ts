import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDepositSlip } from './cash-deposit-slip';

describe('CashDepositSlip', () => {
  let component: CashDepositSlip;
  let fixture: ComponentFixture<CashDepositSlip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashDepositSlip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashDepositSlip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
