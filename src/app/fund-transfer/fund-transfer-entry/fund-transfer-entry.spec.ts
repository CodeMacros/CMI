import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferEntry } from './fund-transfer-entry';

describe('FundTransferEntry', () => {
  let component: FundTransferEntry;
  let fixture: ComponentFixture<FundTransferEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundTransferEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundTransferEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
