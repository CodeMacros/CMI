import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinRakshaCancelMoneyAdmin } from './rin-raksha-cancel-money-admin';

describe('RinRakshaCancelMoneyAdmin', () => {
  let component: RinRakshaCancelMoneyAdmin;
  let fixture: ComponentFixture<RinRakshaCancelMoneyAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RinRakshaCancelMoneyAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinRakshaCancelMoneyAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
