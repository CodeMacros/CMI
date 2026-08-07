import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCashierEntry } from './view-cashier-entry';

describe('ViewCashierEntry', () => {
  let component: ViewCashierEntry;
  let fixture: ComponentFixture<ViewCashierEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCashierEntry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCashierEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
