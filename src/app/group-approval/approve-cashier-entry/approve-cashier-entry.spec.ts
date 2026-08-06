import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveCashierEntry } from './approve-cashier-entry';

describe('ApproveCashierEntry', () => {
  let component: ApproveCashierEntry;
  let fixture: ComponentFixture<ApproveCashierEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveCashierEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveCashierEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
