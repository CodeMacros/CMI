import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateDepositSlip } from './duplicate-deposit-slip';

describe('DuplicateDepositSlip', () => {
  let component: DuplicateDepositSlip;
  let fixture: ComponentFixture<DuplicateDepositSlip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicateDepositSlip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateDepositSlip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
