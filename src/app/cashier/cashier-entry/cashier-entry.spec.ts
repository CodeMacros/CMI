import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierEntry } from './cashier-entry';

describe('CashierEntry', () => {
  let component: CashierEntry;
  let fixture: ComponentFixture<CashierEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashierEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashierEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
