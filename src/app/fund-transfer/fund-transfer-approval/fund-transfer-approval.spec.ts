import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundTransferApproval } from './fund-transfer-approval';

describe('FundTransferApproval', () => {
  let component: FundTransferApproval;
  let fixture: ComponentFixture<FundTransferApproval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundTransferApproval]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundTransferApproval);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
