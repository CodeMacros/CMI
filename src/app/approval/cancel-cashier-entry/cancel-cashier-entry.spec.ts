import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelCashierEntry } from './cancel-cashier-entry';

describe('CancelCashierEntry', () => {
  let component: CancelCashierEntry;
  let fixture: ComponentFixture<CancelCashierEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelCashierEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelCashierEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
