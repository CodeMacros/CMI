import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDepositReceipts } from './proposal-deposit-receipts';

describe('ProposalDepositReceipts', () => {
  let component: ProposalDepositReceipts;
  let fixture: ComponentFixture<ProposalDepositReceipts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposalDepositReceipts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalDepositReceipts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
