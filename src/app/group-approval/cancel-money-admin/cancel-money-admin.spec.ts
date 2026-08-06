import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelMoneyAdmin } from './cancel-money-admin';

describe('CancelMoneyAdmin', () => {
  let component: CancelMoneyAdmin;
  let fixture: ComponentFixture<CancelMoneyAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelMoneyAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelMoneyAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
