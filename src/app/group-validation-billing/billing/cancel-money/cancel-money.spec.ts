import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelMoney } from './cancel-money';

describe('CancelMoney', () => {
  let component: CancelMoney;
  let fixture: ComponentFixture<CancelMoney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancelMoney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelMoney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
