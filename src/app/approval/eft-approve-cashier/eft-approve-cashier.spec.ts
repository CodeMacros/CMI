import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EftApproveCashier } from './eft-approve-cashier';

describe('EftApproveCashier', () => {
  let component: EftApproveCashier;
  let fixture: ComponentFixture<EftApproveCashier>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EftApproveCashier]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EftApproveCashier);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
