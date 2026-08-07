import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierEntryUpload } from './cashier-entry-upload';

describe('CashierEntryUpload', () => {
  let component: CashierEntryUpload;
  let fixture: ComponentFixture<CashierEntryUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashierEntryUpload]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashierEntryUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
