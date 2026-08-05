import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewalTopUp } from './renewal-top-up';

describe('RenewalTopUp', () => {
  let component: RenewalTopUp;
  let fixture: ComponentFixture<RenewalTopUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewalTopUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewalTopUp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
