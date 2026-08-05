import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalRevivalPremium } from './renewal-revival-premium';

describe('RenewalRevivalPremium', () => {
  let component: RenewalRevivalPremium;
  let fixture: ComponentFixture<RenewalRevivalPremium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewalRevivalPremium]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalRevivalPremium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
