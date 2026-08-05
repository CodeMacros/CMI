import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalCdaCharges } from './renewal-cda-charges';

describe('RenewalCdaCharges', () => {
  let component: RenewalCdaCharges;
  let fixture: ComponentFixture<RenewalCdaCharges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewalCdaCharges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalCdaCharges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
