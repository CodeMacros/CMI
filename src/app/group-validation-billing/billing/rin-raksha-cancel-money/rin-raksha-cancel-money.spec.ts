import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinRakshaCancelMoney } from './rin-raksha-cancel-money';

describe('RinRakshaCancelMoney', () => {
  let component: RinRakshaCancelMoney;
  let fixture: ComponentFixture<RinRakshaCancelMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RinRakshaCancelMoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinRakshaCancelMoney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
