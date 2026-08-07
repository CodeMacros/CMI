import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalPremiumReceipts } from './renewal-premium-receipts';

describe('RenewalPremiumReceipts', () => {
  let component: RenewalPremiumReceipts;
  let fixture: ComponentFixture<RenewalPremiumReceipts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewalPremiumReceipts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalPremiumReceipts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
